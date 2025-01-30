'use client'
import { useEffect, useMemo, useState } from 'react'

import { rankItem } from '@tanstack/match-sorter-utils'
import type { RankingInfo } from '@tanstack/match-sorter-utils'
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getFilteredRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFacetedMinMaxValues,
    getPaginationRowModel,
    getSortedRowModel
} from '@tanstack/react-table'
import type { ColumnDef, FilterFn } from '@tanstack/react-table'
import classnames from 'classnames'
import { Controller, useForm } from 'react-hook-form'

import { Checkbox, Divider, IconButton } from '@mui/material'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import TablePagination from '@mui/material/TablePagination'
import type { TextFieldProps } from '@mui/material/TextField'
import Typography from '@mui/material/Typography'


import { getLocalizedUrl } from '@/utils/i18n'
import TablePaginationComponent from '@components/TablePaginationComponent'
import CustomTextField from '@core/components/mui/TextField'
import tableStyles from '@core/styles/table.module.css'
import type { ThemeColor } from '@core/types'

import CityAndState from "./statescity.json"



declare module '@tanstack/table-core' {
    interface FilterFns {
        fuzzy: FilterFn<unknown>
    }
    interface FilterMeta {
        itemRank: RankingInfo
    }
}

interface UserDataTypes {
    _id: string;
    number_asked: number;
    fullName: string;
    email: string;
    password: string;
    plan_type: string;
    team_member: string | number;
    plans: string;
    price: string | number;
    number_type: string;
    toll_free_no: string;
    local_no: string;
    current_no: string;
    address: string;
    state: string;
    city: string;
    zip_code: string;
    temp: string;
    no_of_users: string | number;
    status: string;
}


type UsersTypeWithAction = UserDataTypes & {
    action?: string
}
const Icon = styled('i')({})

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value)

    addMeta({
        itemRank
    })


    return itemRank.passed
}

const DebouncedInput = ({
    value: initialValue,
    onChange,
    debounce = 500,
    ...props
}: {
    value: string | number
    onChange: (value: string | number) => void
    debounce?: number
} & Omit<TextFieldProps, 'onChange'>) => {
    // States
    const [value, setValue] = useState(initialValue)

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value)
        }, debounce)

        return () => clearTimeout(timeout)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return <CustomTextField {...props} value={value} onChange={e => setValue(e.target.value)} />
}

const columnHelper = createColumnHelper<UsersTypeWithAction>()

const Leads = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [rowSelection, setRowSelection] = useState({})
    const [data, setData] = useState<UserDataTypes[]>([])
    const [filteredData, setFilteredData] = useState<UserDataTypes[]>([])
    const [states, setStates] = useState<any[]>([]);
    const [cities, setCities] = useState<any[]>([]);
    const [globalFilter, setGlobalFilter] = useState('')
    const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(null)

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
        trigger,
        watch,
        getValues
    } = useForm({
        defaultValues: {
            number_asked: '',
            fullName: '',
            email: '',
            password: '',
            plan_type: '',
            team_member: '',
            plans: '',
            price: '',
            number_type: '',
            toll_free_no: '',
            local_no: '',
            current_no: '',
            address: '',
            state: '',
            city: '',
            zip_code: '',
            temp: '',
            no_of_users: '',
            status: ''
        }
    })

    const handleStateChange = (stateName: string) => {
        const selectedStateObj = states.find(state => state.state.name === stateName);
        const cityList = selectedStateObj ? selectedStateObj.state.city_list : [];

        setCities(cityList);
        setValue('city', '');
        trigger('city');
    };

    useEffect(() => {
        setStates(CityAndState);
    }, []);

    const numberType = watch('number_type');
    const planType = watch('plan_type');
    const planSelect = watch('plans')
    const teamMember = watch('team_member');

    useEffect(() => {
        if (planType === '0') {
            setValue('price', '25$ / per month');
            setValue('plans', 'Residential');
        }

        if (planType === '1' && teamMember === "0" || planType === '1' && teamMember === "1") {
            setValue('price', '25$ / per month');
            setValue('plans', 'Starter');
        }

        if (planType === '1' && ["2", "3", "4", "5", "6", "7", "8", "9", "10"].includes(teamMember) && planSelect === "Basic") {
            setValue('price', '29.99$ / per month');
        }

        if (planType === '1' && planSelect === "Essential") {
            setValue('price', '49.99$ / per month');
        }

        if (planType === '1' && planSelect === "Premium") {
            setValue('price', '89.99$ / per month');
        }

    }, [planType, teamMember, planSelect, setValue]);

    const getLeadsData = async () => {
        try {
            const res = await fetch('http://localhost:3001/leads-list', { cache: 'no-store' })

            if (!res.ok) {
                throw new Error('Failed to fetch  data')
            }

            const data = await res.json()

            setData(data)
            setFilteredData(data)
        } catch (error) {
            console.error('Error fetching  data:', error)
            throw error
        }
    }

    useEffect(() => {
        getLeadsData()
    }, [])

    const handleDrawerToggle = () => {
        if (drawerOpen) {
            reset()
        }

        setDrawerOpen(!drawerOpen)
    }

    const handleReset = () => {
        reset()
        setDrawerOpen(false)
        setSelectedCustomerId(null)
    }

    const onSubmit = async (data: any) => {

        try {
            const resdata = await fetch(selectedCustomerId
                ? `http://localhost:3001/edit-list/${selectedCustomerId}`
                : 'http://localhost:3001/Leads',
                {
                    method: selectedCustomerId ? 'PUT' : 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        ...data,
                        plan_type: data.plan_type,
                        team_member: data.team_member || null,
                        plans: data.plans || null,
                        price: data.price,
                        toll_free_no: data.toll_free_no || null,
                        local_no: data.local_no || null,
                    })
                });

            if (resdata.ok) {
                getLeadsData();
                reset();
                setDrawerOpen(false);
                setSelectedCustomerId(null);
            } else {
                console.error('Failed to submit the form');
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };

    const handleDelete = (id: string) => {
        fetch(`http://localhost:3001/delete-list/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    getLeadsData()
                } else {
                    console.error('Failed to delete the record')
                }
            })
            .catch(err => {
                console.error('Error deleting the record:', err)
            })
    }

    const handleEdit = (id: string) => {
        const customer = data.find((customer) => customer._id === id);

        if (customer) {
            setValue('fullName', customer.fullName)
            setValue('email', customer.email)
            setValue('password', customer.password)
            setValue('plan_type', customer.plan_type)
            setValue('number_type', customer.number_type)
            setValue('team_member', `${customer.team_member ?? null}`);
            setValue('plans', customer.plans ?? null);
            setValue('toll_free_no', customer.toll_free_no ?? null);
            setValue('local_no', customer.local_no ?? null);
            setValue('current_no', customer.current_no)
            setValue('price', `${customer.price}`);
            setValue('address', customer.address)
            setValue('state', customer.state)
            setValue('city', customer.city)
            setValue('zip_code', customer.zip_code)
            setValue('temp', customer.temp)
            setValue('no_of_users', `${customer.no_of_users}`);
            setValue('number_asked', `${customer.number_asked}`);
            setValue('status', customer.status)
            setSelectedCustomerId(customer._id)
            setDrawerOpen(true)
        }
    }

    const handleTransfer = async (id: string) => {
        fetch(`http://localhost:3001/transfer-leads/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) {
                    alert('Leads transferred successfully!');
                    getLeadsData(); // Ensure this updates the leads data in your UI
                } else {
                    console.error('Failed to transfer the record');
                }
            })
            .catch((err) => {
                console.error('Error transferring leads:', err);
            });
    };


    const columns = useMemo<ColumnDef<any, any>[]>(
        () => [
            {
                id: 'select',
                header: ({ table }) => (
                    <Checkbox
                        {...{
                            checked: table.getIsAllRowsSelected(),
                            indeterminate: table.getIsSomeRowsSelected(),
                            onChange: table.getToggleAllRowsSelectedHandler()
                        }}
                    />
                ),
                cell: ({ row }) => (
                    <Checkbox
                        {...{
                            checked: row.getIsSelected(),
                            disabled: !row.getCanSelect(),
                            indeterminate: row.getIsSomeSelected(),
                            onChange: row.getToggleSelectedHandler()
                        }}
                    />
                )
            },
            {
                accessorKey: 'fullName',
                header: 'Name',
                cell: ({ getValue }) => <span>{getValue()}</span>
            },
            {
                accessorKey: 'email',
                header: 'Email',
                cell: ({ getValue }) => <span>{getValue()}</span>
            },
            {
                accessorKey: 'current_no',
                header: 'Phone ',
                cell: ({ getValue }) => <span>{getValue()}</span>
            },
            {
                accessorKey: 'plan_type',
                header: 'Plan Type',
                cell: ({ getValue }) => {
                    const value = getValue();


                    return <span>{value == 1 ? 'Business' : 'Residential'}</span>;
                }
            },
            {
                accessorKey: 'status',
                header: 'Status',
                cell: ({ getValue }) => {
                    const value = getValue();

                    const badgeStyle = {
                        display: 'inline-block',
                        padding: '0.25em 0.5em',
                        borderRadius: '0.25rem',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: 'white',
                        backgroundColor: value === "active" ? '#28a745' : '#dc3545',
                    };


                    return (
                        <span style={badgeStyle}>
                            {value === "active" ? 'Active' : 'Inactive'}
                        </span>
                    );
                }
            },
            {
                accessorKey: 'createdAt',
                header: 'Date',
                cell: ({ getValue }) => {
                    const value = getValue();
                    const date = new Date(value);

                    const formattedDate = date.toLocaleString('en-GB', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        hour12: false,
                    });

                    return <span>{formattedDate}</span>;
                }
            },

            columnHelper.accessor('action', {
                header: () => <div className=""></div>,
                cell: ({ row }) => {
                    const Ids = row?.original?._id;

                    
return (
                        <div>
                            <Button variant='tonal' className='max-sm:is-full' type='reset' onClick={() => handleTransfer(Ids)}>
                                Paid
                            </Button>
                        </div>
                    );
                },
                enableSorting: false
            }),

            columnHelper.accessor('action', {
                header: () => <div className="text-right">Action</div>,
                cell: ({ row }) => {
                    const Ids = row?.original?._id;

                    
return (
                        <div className='flex items-center justify-end'>
                            <IconButton onClick={() => handleDelete(Ids)}>
                                <i className='tabler-trash text-textSecondary' />
                            </IconButton>

                            <IconButton onClick={() => handleEdit(Ids)}>
                                <i className='tabler-edit text-textSecondary' />
                            </IconButton>
                        </div>
                    );
                },
                enableSorting: false
            })
        ],
        [data]
    )

    const table = useReactTable({
        data: filteredData,
        columns,
        filterFns: {
            fuzzy: fuzzyFilter
        },
        state: {
            rowSelection,
            globalFilter
        },
        initialState: {
            pagination: {
                pageSize: 10
            }
        },
        enableRowSelection: true,
        globalFilterFn: fuzzyFilter,
        onRowSelectionChange: setRowSelection,
        getCoreRowModel: getCoreRowModel(),
        onGlobalFilterChange: setGlobalFilter,
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        getFacetedMinMaxValues: getFacetedMinMaxValues()
    })

    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Typography variant='h4' className='mbe-1'>
                    Leads
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <div className='flex justify-between flex-col items-start md:flex-row md:items-center p-6 border-bs gap-4'>
                    <CustomTextField
                        select
                        value={table.getState().pagination.pageSize}
                        onChange={e => table.setPageSize(Number(e.target.value))}
                        className='max-sm:is-full sm:is-[70px]'
                    >
                        <MenuItem value='10'>10</MenuItem>
                        <MenuItem value='25'>25</MenuItem>
                        <MenuItem value='50'>50</MenuItem>
                    </CustomTextField>
                    <div className='flex flex-col sm:flex-row max-sm:is-full items-start sm:items-center gap-4'>
                        <DebouncedInput
                            value={globalFilter ?? ''}
                            onChange={value => setGlobalFilter(String(value))}
                            placeholder='Search...'
                            className='max-sm:is-full'
                        />
                        <Button
                            variant='contained'
                            startIcon={<i className='tabler-plus' />}
                            onClick={handleDrawerToggle}
                            className='max-sm:is-full'
                        >
                            Add Lead
                        </Button>
                    </div>
                </div>
                <div className='overflow-x-auto'>
                    <table className={tableStyles.table}>
                        <thead>
                            {table.getHeaderGroups().map(headerGroup => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map(header => (
                                        <th key={header.id}>
                                            {header.isPlaceholder ? null : (
                                                <>
                                                    <div
                                                        className={classnames({
                                                            'flex items-center': header.column.getIsSorted(),
                                                            'cursor-pointer select-none': header.column.getCanSort()
                                                        })}
                                                        onClick={header.column.getToggleSortingHandler()}
                                                    >
                                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                                        {{
                                                            asc: <i className='tabler-chevron-up text-xl' />,
                                                            desc: <i className='tabler-chevron-down text-xl' />
                                                        }[header.column.getIsSorted() as 'asc' | 'desc'] ?? null}
                                                    </div>
                                                </>
                                            )}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        {table.getFilteredRowModel().rows.length === 0 ? (
                            <tbody>
                                <tr>
                                    <td colSpan={table.getVisibleFlatColumns().length} className='text-center'>
                                        No data available
                                    </td>
                                </tr>
                            </tbody>
                        ) : (
                            <tbody>
                                {table
                                    .getRowModel()
                                    .rows.slice(0, table.getState().pagination.pageSize)
                                    .map(row => {
                                        return (
                                            <tr key={row.id} className={classnames({ selected: row.getIsSelected() })}>
                                                {row.getVisibleCells().map(cell => (
                                                    <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                                                ))}
                                            </tr>
                                        )
                                    })}
                            </tbody>
                        )}
                    </table>
                </div>
                <TablePagination
                    component={() => <TablePaginationComponent table={table} />}
                    count={table.getFilteredRowModel().rows.length}
                    rowsPerPage={table.getState().pagination.pageSize}
                    page={table.getState().pagination.pageIndex}
                    onPageChange={(_, page) => {
                        table.setPageIndex(page)
                    }}
                />
            </Grid>

            <Drawer
                open={drawerOpen}
                anchor='right'
                variant='temporary'
                ModalProps={{ keepMounted: true }}
                sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
            >
                <div className='flex items-center justify-between plb-5 pli-6'>
                    <Typography variant='h5'>{selectedCustomerId ? 'Edit Lead' : 'Add New Lead'}</Typography>
                    <IconButton size='small' onClick={handleReset}>
                        <i className='tabler-x text-2xl text-textPrimary' />
                    </IconButton>
                </div>
                <Divider />
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6 p-6'>
                        <Controller
                            name='number_asked'
                            control={control}
                            rules={{ required: 'Number Asked is required' }}
                            render={({ field }) => (
                                <CustomTextField
                                    {...field}
                                    fullWidth
                                    label='Number Asked'
                                    placeholder='Enter number asked'
                                    {...(errors.number_asked && { error: true, helperText: errors.number_asked.message })}
                                />
                            )}
                        />

                        <Controller
                            name='fullName'
                            control={control}
                            rules={{ required: 'Full name is required' }}
                            render={({ field }) => (
                                <CustomTextField
                                    {...field}
                                    fullWidth
                                    label='Full Name'
                                    placeholder='Enter Full name'
                                    {...(errors.fullName && { error: true, helperText: errors.fullName.message })}
                                />
                            )}
                        />

                        <Controller
                            name='email'
                            control={control}
                            rules={{ required: 'Email is required' }}
                            render={({ field }) => (
                                <CustomTextField
                                    {...field}
                                    fullWidth
                                    label='Email'
                                    placeholder='Enter Email'
                                    {...(errors.email && { error: true, helperText: errors.email.message })}
                                />
                            )}
                        />

                        <Controller
                            name='password'
                            control={control}
                            rules={{ required: 'Password is required' }}
                            render={({ field }) => (
                                <CustomTextField
                                    {...field}
                                    fullWidth
                                    label='Password'
                                    placeholder='Enter Password'
                                    {...(errors.password && { error: true, helperText: errors.password.message })}
                                />
                            )}
                        />

                        <Controller
                            name='plan_type'
                            control={control}
                            rules={{ required: 'Plan type is required' }}
                            render={({ field }) => (
                                <CustomTextField
                                    select
                                    fullWidth
                                    id='select-plan'
                                    label='Select Plan Type'
                                    {...field}
                                    {...(errors.plan_type && { error: true, helperText: errors.plan_type.message })}
                                >
                                    <MenuItem value='0'>Home</MenuItem>
                                    <MenuItem value='1'>Business</MenuItem>
                                </CustomTextField>
                            )}
                        />

                        {planType && planType === "0" && (
                            <>
                                <Controller
                                    name='plans'
                                    control={control}
                                    render={({ field }) => (
                                        <CustomTextField
                                            fullWidth
                                            label='Plan'
                                            disabled
                                            {...field}
                                            {...(errors.plans && { error: true, helperText: errors.plans.message })}
                                        />
                                    )}
                                />

                                <Controller
                                    name='price'
                                    control={control}
                                    rules={{ required: 'Price is required' }}
                                    render={({ field }) => (
                                        <CustomTextField
                                            fullWidth
                                            label='Price'
                                            disabled
                                            {...field}
                                            {...(errors.price && { error: true, helperText: errors.price.message })}
                                        />
                                    )}
                                />
                            </>
                        )}

                        {planType === "1" && (
                            <>
                                <div className="text-md text-red-600">
                                    Please specify how many phone extensions you need. Cost is $10 / extension.
                                </div>
                                <Controller
                                    name='team_member'
                                    control={control}
                                    rules={{ required: 'Team member is required' }}
                                    render={({ field }) => (
                                        <CustomTextField
                                            select
                                            fullWidth
                                            id='team-members'
                                            label='Team Members'
                                            {...field}
                                            {...(errors.team_member && { error: true, helperText: errors.team_member.message })}
                                        >
                                            <MenuItem value='0'>0</MenuItem>
                                            <MenuItem value='1'>1</MenuItem>
                                            <MenuItem value='2'>2</MenuItem>
                                            <MenuItem value='3'>3</MenuItem>
                                            <MenuItem value='4'>4</MenuItem>
                                            <MenuItem value='5'>5</MenuItem>
                                            <MenuItem value='6'>6</MenuItem>
                                            <MenuItem value='7'>7</MenuItem>
                                            <MenuItem value='8'>8</MenuItem>
                                            <MenuItem value='9'>9</MenuItem>
                                            <MenuItem value='10'>10</MenuItem>
                                        </CustomTextField>
                                    )}
                                />

                                {["2", "3", "4", "5", "6", "7", "8", "9", "10"].includes(teamMember) && (
                                    <Controller
                                        name='plans'
                                        control={control}
                                        rules={{ required: 'Plan is required' }}
                                        render={({ field }) => (
                                            <CustomTextField
                                                select
                                                fullWidth
                                                id='plan-select'
                                                label='Select Plan'
                                                {...field}
                                                {...(errors.plans && { error: true, helperText: errors.plans.message })}
                                            >
                                                <MenuItem value="Basic">Basic</MenuItem>
                                                <MenuItem value="Essential">Essential</MenuItem>
                                                <MenuItem value="Premium">Premium</MenuItem>
                                            </CustomTextField>
                                        )}
                                    />
                                )}

                                {planSelect === "Basic" && (
                                    <Controller
                                        name='price'
                                        control={control}
                                        rules={{ required: 'Price is required' }}
                                        render={({ field }) => (
                                            <CustomTextField
                                                fullWidth
                                                label='Price'
                                                disabled
                                                {...field}
                                                {...(errors.price && { error: true, helperText: errors.price.message })}
                                            />
                                        )}
                                    />
                                )}

                                {planSelect === "Essential" && (
                                    <Controller
                                        name='price'
                                        control={control}
                                        rules={{ required: 'Price is required' }}
                                        render={({ field }) => (
                                            <CustomTextField
                                                fullWidth
                                                label='Price'
                                                disabled
                                                {...field}
                                                {...(errors.price && { error: true, helperText: errors.price.message })}
                                            />
                                        )}
                                    />
                                )}

                                {planSelect === "Premium" && (
                                    <Controller
                                        name='price'
                                        control={control}
                                        rules={{ required: 'Price is required' }}
                                        render={({ field }) => (
                                            <CustomTextField
                                                fullWidth
                                                label='Price'
                                                disabled
                                                {...field}
                                                {...(errors.price && { error: true, helperText: errors.price.message })}
                                            />
                                        )}
                                    />
                                )}
                            </>
                        )}

                        {planType === "1" && teamMember === "0" && (
                            <>
                                <Controller
                                    name='plans'
                                    control={control}
                                    render={({ field }) => (
                                        <CustomTextField
                                            fullWidth
                                            label='Plan'
                                            disabled
                                            {...field}
                                            {...(errors.plans && { error: true, helperText: errors.plans.message })}
                                        />
                                    )}
                                />
                                <Controller
                                    name='price'
                                    control={control}
                                    rules={{ required: 'Price is required' }}
                                    render={({ field }) => (
                                        <CustomTextField
                                            fullWidth
                                            label='Price'
                                            disabled
                                            {...field}
                                            {...(errors.price && { error: true, helperText: errors.price.message })}
                                        />
                                    )}
                                />
                            </>
                        )}

                        {planType === "1" && teamMember === "1" && (
                            <>
                                <Controller
                                    name='plans'
                                    control={control}
                                    render={({ field }) => (
                                        <CustomTextField
                                            fullWidth
                                            label='Plan'
                                            disabled
                                            {...field}
                                            {...(errors.plans && { error: true, helperText: errors.plans.message })}
                                        />
                                    )}
                                />
                                <Controller
                                    name='price'
                                    control={control}
                                    rules={{ required: 'Price is required' }}
                                    render={({ field }) => (
                                        <CustomTextField
                                            fullWidth
                                            label='Price'
                                            disabled
                                            {...field}
                                            {...(errors.price && { error: true, helperText: errors.price.message })}
                                        />
                                    )}
                                />
                            </>
                        )}

                        <Controller
                            name='number_type'
                            control={control}
                            rules={{ required: 'Number type is required' }}
                            render={({ field }) => (
                                <CustomTextField
                                    select
                                    fullWidth
                                    id='select-number-type'
                                    label='Select Number Type'
                                    {...field}
                                    {...(errors.number_type && { error: true, helperText: errors.number_type.message })}
                                >
                                    <MenuItem value='5'>Local Number</MenuItem>
                                    <MenuItem value='6'>Toll Free Number</MenuItem>
                                </CustomTextField>
                            )}
                        />

                        {numberType === '5' && (
                            <Controller
                                name="local_no"
                                control={control}
                                render={({ field }) => (
                                    <CustomTextField
                                        {...field}
                                        label="Local Number"
                                        error={!!errors.toll_free_no || !!errors.local_no || !!errors.current_no}
                                    />
                                )}
                            />
                        )}

                        {numberType === '6' && (
                            <Controller
                                name="toll_free_no"
                                control={control}
                                render={({ field }) => (
                                    <CustomTextField
                                        {...field}
                                        label="Toll-Free Number"
                                        error={!!errors.toll_free_no || !!errors.local_no || !!errors.current_no}
                                        helperText={errors.toll_free_no || errors.local_no || errors.current_no ? 'At least one number is required' : ''}
                                    />
                                )}
                            />
                        )}

                        <Controller
                            name='current_no'
                            control={control}
                            rules={{ required: 'Current number is required' }}
                            render={({ field }) => (
                                <CustomTextField
                                    {...field}
                                    fullWidth
                                    label='Current Number'
                                    placeholder='Enter current no.'
                                    {...(errors.current_no && { error: true, helperText: errors.current_no.message })}
                                />
                            )}
                        />

                        <Controller
                            name='address'
                            control={control}
                            rules={{ required: 'Address is required' }}
                            render={({ field }) => (
                                <CustomTextField
                                    {...field}
                                    fullWidth
                                    label='Address'
                                    placeholder='Enter address'
                                    {...(errors.address && { error: true, helperText: errors.address.message })}
                                />
                            )}
                        />

                        <Controller
                            name='state'
                            control={control}
                            rules={{ required: 'State is required' }}
                            render={({ field }) => (
                                <CustomTextField
                                    select
                                    fullWidth
                                    id='select-state'
                                    label='Select State'
                                    {...field}
                                    {...(errors.state && { error: true, helperText: errors.state.message })}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        handleStateChange(e.target.value);
                                    }}
                                >
                                    {states.map((state) => (
                                        <MenuItem key={state.state.id} value={state.state.name}>
                                            {state.state.name}
                                        </MenuItem>
                                    ))}
                                </CustomTextField>
                            )}
                        />

                        <Controller
                            name='city'
                            control={control}
                            rules={{ required: 'City is required' }}
                            render={({ field }) => (
                                <CustomTextField
                                    select
                                    fullWidth
                                    id='select-city'
                                    label='Select City'
                                    {...field}
                                    {...(errors.city && { error: true, helperText: errors.city.message })}
                                >
                                    {cities.map((city) => (
                                        <MenuItem key={city.value} value={city.value}>
                                            {city.name}
                                        </MenuItem>
                                    ))}

                                </CustomTextField>
                            )}
                        />

                        <Controller
                            name='zip_code'
                            control={control}
                            rules={{ required: 'Zip code is required' }}
                            render={({ field }) => (
                                <CustomTextField
                                    {...field}
                                    fullWidth
                                    label='Zip code'
                                    placeholder='Enter zip code'
                                    {...(errors.zip_code && { error: true, helperText: errors.zip_code.message })}
                                />
                            )}
                        />

                        <Controller
                            name='temp'
                            control={control}
                            rules={{ required: 'Temp is required' }}
                            render={({ field }) => (
                                <CustomTextField
                                    {...field}
                                    fullWidth
                                    label='Temp'
                                    placeholder='Enter Temp'
                                    {...(errors.temp && { error: true, helperText: errors.temp.message })}
                                />
                            )}
                        />

                        <Controller
                            name='no_of_users'
                            control={control}
                            rules={{ required: 'Number of user is required' }}
                            render={({ field }) => (
                                <CustomTextField
                                    {...field}
                                    fullWidth
                                    label='Number of user'
                                    placeholder='Enter number of user'
                                    {...(errors.no_of_users && { error: true, helperText: errors.no_of_users.message })}
                                />
                            )}
                        />

                        <Controller
                            name='status'
                            control={control}
                            rules={{ required: 'Status is required' }}
                            render={({ field }) => (
                                <CustomTextField
                                    select
                                    fullWidth
                                    id='select-status'
                                    label='Select Status'
                                    {...field}
                                    {...(errors.status && { error: true, helperText: errors.status.message })}
                                >
                                    <MenuItem value='active'>Active</MenuItem>
                                    <MenuItem value='inactive'>Inactive</MenuItem>
                                </CustomTextField>
                            )}
                        />

                        <div className='flex items-center gap-4'>
                            <Button variant='contained' type='submit'>
                                {selectedCustomerId ? 'Update' : 'Submit'}
                            </Button>
                            <Button variant='tonal' color='error' type='reset' onClick={handleReset}>
                                Cancel
                            </Button>
                        </div>
                    </form>
                </div>
            </Drawer>
        </Grid>
    )
}

export default Leads
