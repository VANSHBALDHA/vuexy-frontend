import { NextResponse } from 'next/server';

import bcrypt from 'bcryptjs'; // Third-party imports should come first

import type { UserTable } from './users'; // Type imports can remain last if your rules allow it
import { connectToDatabase } from '../mongodb/mongodb'; // Relative imports come after third-party imports



type ResponseUser = Omit<UserTable, 'password'>;

export async function POST(req: Request) {
  const { email, password } = await req.json();

  try {
    // Connect to MongoDB
    const db = await connectToDatabase();
    const usersCollection = db.collection<UserTable>('usersses');

    // Find user by email
    const user = await usersCollection.findOne({ email });

    if (user) {
      // Compare the provided password with the stored hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        // Exclude password from response
        const { password: __, ...filteredUserData } = user;

        const response: ResponseUser = {
          ...filteredUserData,
        };

        return NextResponse.json(response);
      } else {
        // Return 401 if the password does not match
        return NextResponse.json(
          {
            message: ['Email or Password is invalid'],
          },
          {
            status: 401,
            statusText: 'Unauthorized Access',
          }
        );
      }
    } else {
      // Return 401 if no user is found
      return NextResponse.json(
        {
          message: ['Email or Password is invalid'],
        },
        {
          status: 401,
          statusText: 'Unauthorized Access',
        }
      );
    }
  } catch (error) {
    console.error('Error processing the request:', error);

    return NextResponse.json(
      {
        message: ['Internal Server Error'],
      },
      {
        status: 500,
        statusText: 'Internal Server Error',
      }
    );
  }
}
