"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@auth";
exports.ids = ["vendor-chunks/@auth"];
exports.modules = {

/***/ "(rsc)/./node_modules/@auth/prisma-adapter/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@auth/prisma-adapter/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PrismaAdapter: () => (/* binding */ PrismaAdapter)\n/* harmony export */ });\nfunction PrismaAdapter(prisma) {\n    const p = prisma;\n    return {\n        // We need to let Prisma generate the ID because our default UUID is incompatible with MongoDB\n        createUser: ({ id: _id, ...data }) => {\n            return p.user.create({ data });\n        },\n        getUser: (id) => p.user.findUnique({ where: { id } }),\n        getUserByEmail: (email) => p.user.findUnique({ where: { email } }),\n        async getUserByAccount(provider_providerAccountId) {\n            const account = await p.account.findUnique({\n                where: { provider_providerAccountId },\n                select: { user: true },\n            });\n            return account?.user ?? null;\n        },\n        updateUser: ({ id, ...data }) => p.user.update({ where: { id }, data }),\n        deleteUser: (id) => p.user.delete({ where: { id } }),\n        linkAccount: (data) => p.account.create({ data }),\n        unlinkAccount: (provider_providerAccountId) => p.account.delete({\n            where: { provider_providerAccountId },\n        }),\n        async getSessionAndUser(sessionToken) {\n            const userAndSession = await p.session.findUnique({\n                where: { sessionToken },\n                include: { user: true },\n            });\n            if (!userAndSession)\n                return null;\n            const { user, ...session } = userAndSession;\n            return { user, session };\n        },\n        createSession: (data) => p.session.create({ data }),\n        updateSession: (data) => p.session.update({ where: { sessionToken: data.sessionToken }, data }),\n        deleteSession: (sessionToken) => p.session.delete({ where: { sessionToken } }),\n        async createVerificationToken(data) {\n            const verificationToken = await p.verificationToken.create({ data });\n            // @ts-expect-errors // MongoDB needs an ID, but we don't\n            if (verificationToken.id)\n                delete verificationToken.id;\n            return verificationToken;\n        },\n        async useVerificationToken(identifier_token) {\n            try {\n                const verificationToken = await p.verificationToken.delete({\n                    where: { identifier_token },\n                });\n                // @ts-expect-errors // MongoDB needs an ID, but we don't\n                if (verificationToken.id)\n                    delete verificationToken.id;\n                return verificationToken;\n            }\n            catch (error) {\n                // If token already used/deleted, just return null\n                // https://www.prisma.io/docs/reference/api-reference/error-reference#p2025\n                if (error.code === \"P2025\")\n                    return null;\n                throw error;\n            }\n        },\n        async getAccount(providerAccountId, provider) {\n            return p.account.findFirst({\n                where: { providerAccountId, provider },\n            });\n        },\n        async createAuthenticator(authenticator) {\n            return p.authenticator.create({\n                data: authenticator,\n            });\n        },\n        async getAuthenticator(credentialID) {\n            return p.authenticator.findUnique({\n                where: { credentialID },\n            });\n        },\n        async listAuthenticatorsByUserId(userId) {\n            return p.authenticator.findMany({\n                where: { userId },\n            });\n        },\n        async updateAuthenticatorCounter(credentialID, counter) {\n            return p.authenticator.update({\n                where: { credentialID },\n                data: { counter },\n            });\n        },\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvQGF1dGgvcHJpc21hLWFkYXB0ZXIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QyxtQ0FBbUMsTUFBTTtBQUN6QyxTQUFTO0FBQ1QsNkNBQTZDLFNBQVMsTUFBTTtBQUM1RCx1REFBdUQsU0FBUyxTQUFTO0FBQ3pFO0FBQ0E7QUFDQSx5QkFBeUIsNEJBQTRCO0FBQ3JELDBCQUEwQixZQUFZO0FBQ3RDLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVCx1QkFBdUIsYUFBYSxxQkFBcUIsU0FBUyxJQUFJLFFBQVE7QUFDOUUsNENBQTRDLFNBQVMsTUFBTTtBQUMzRCxrREFBa0QsTUFBTTtBQUN4RDtBQUNBLHFCQUFxQiw0QkFBNEI7QUFDakQsU0FBUztBQUNUO0FBQ0E7QUFDQSx5QkFBeUIsY0FBYztBQUN2QywyQkFBMkIsWUFBWTtBQUN2QyxhQUFhO0FBQ2I7QUFDQTtBQUNBLG9CQUFvQixtQkFBbUI7QUFDdkMscUJBQXFCO0FBQ3JCLFNBQVM7QUFDVCxvREFBb0QsTUFBTTtBQUMxRCxvREFBb0QsU0FBUyxpQ0FBaUMsUUFBUTtBQUN0Ryw0REFBNEQsU0FBUyxnQkFBZ0I7QUFDckY7QUFDQSx5RUFBeUUsTUFBTTtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsa0JBQWtCO0FBQy9DLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHlCQUF5Qiw2QkFBNkI7QUFDdEQsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSx5QkFBeUIsY0FBYztBQUN2QyxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSx5QkFBeUIsUUFBUTtBQUNqQyxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSx5QkFBeUIsY0FBYztBQUN2Qyx3QkFBd0IsU0FBUztBQUNqQyxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWV4eS1tdWktbmV4dGpzLWFkbWluLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL0BhdXRoL3ByaXNtYS1hZGFwdGVyL2luZGV4LmpzP2UwNGEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIFByaXNtYUFkYXB0ZXIocHJpc21hKSB7XG4gICAgY29uc3QgcCA9IHByaXNtYTtcbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBXZSBuZWVkIHRvIGxldCBQcmlzbWEgZ2VuZXJhdGUgdGhlIElEIGJlY2F1c2Ugb3VyIGRlZmF1bHQgVVVJRCBpcyBpbmNvbXBhdGlibGUgd2l0aCBNb25nb0RCXG4gICAgICAgIGNyZWF0ZVVzZXI6ICh7IGlkOiBfaWQsIC4uLmRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHAudXNlci5jcmVhdGUoeyBkYXRhIH0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXRVc2VyOiAoaWQpID0+IHAudXNlci5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQgfSB9KSxcbiAgICAgICAgZ2V0VXNlckJ5RW1haWw6IChlbWFpbCkgPT4gcC51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBlbWFpbCB9IH0pLFxuICAgICAgICBhc3luYyBnZXRVc2VyQnlBY2NvdW50KHByb3ZpZGVyX3Byb3ZpZGVyQWNjb3VudElkKSB7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgcC5hY2NvdW50LmZpbmRVbmlxdWUoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7IHByb3ZpZGVyX3Byb3ZpZGVyQWNjb3VudElkIH0sXG4gICAgICAgICAgICAgICAgc2VsZWN0OiB7IHVzZXI6IHRydWUgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGFjY291bnQ/LnVzZXIgPz8gbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlVXNlcjogKHsgaWQsIC4uLmRhdGEgfSkgPT4gcC51c2VyLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSksXG4gICAgICAgIGRlbGV0ZVVzZXI6IChpZCkgPT4gcC51c2VyLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSksXG4gICAgICAgIGxpbmtBY2NvdW50OiAoZGF0YSkgPT4gcC5hY2NvdW50LmNyZWF0ZSh7IGRhdGEgfSksXG4gICAgICAgIHVubGlua0FjY291bnQ6IChwcm92aWRlcl9wcm92aWRlckFjY291bnRJZCkgPT4gcC5hY2NvdW50LmRlbGV0ZSh7XG4gICAgICAgICAgICB3aGVyZTogeyBwcm92aWRlcl9wcm92aWRlckFjY291bnRJZCB9LFxuICAgICAgICB9KSxcbiAgICAgICAgYXN5bmMgZ2V0U2Vzc2lvbkFuZFVzZXIoc2Vzc2lvblRva2VuKSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyQW5kU2Vzc2lvbiA9IGF3YWl0IHAuc2Vzc2lvbi5maW5kVW5pcXVlKHtcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBzZXNzaW9uVG9rZW4gfSxcbiAgICAgICAgICAgICAgICBpbmNsdWRlOiB7IHVzZXI6IHRydWUgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCF1c2VyQW5kU2Vzc2lvbilcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlciwgLi4uc2Vzc2lvbiB9ID0gdXNlckFuZFNlc3Npb247XG4gICAgICAgICAgICByZXR1cm4geyB1c2VyLCBzZXNzaW9uIH07XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZVNlc3Npb246IChkYXRhKSA9PiBwLnNlc3Npb24uY3JlYXRlKHsgZGF0YSB9KSxcbiAgICAgICAgdXBkYXRlU2Vzc2lvbjogKGRhdGEpID0+IHAuc2Vzc2lvbi51cGRhdGUoeyB3aGVyZTogeyBzZXNzaW9uVG9rZW46IGRhdGEuc2Vzc2lvblRva2VuIH0sIGRhdGEgfSksXG4gICAgICAgIGRlbGV0ZVNlc3Npb246IChzZXNzaW9uVG9rZW4pID0+IHAuc2Vzc2lvbi5kZWxldGUoeyB3aGVyZTogeyBzZXNzaW9uVG9rZW4gfSB9KSxcbiAgICAgICAgYXN5bmMgY3JlYXRlVmVyaWZpY2F0aW9uVG9rZW4oZGF0YSkge1xuICAgICAgICAgICAgY29uc3QgdmVyaWZpY2F0aW9uVG9rZW4gPSBhd2FpdCBwLnZlcmlmaWNhdGlvblRva2VuLmNyZWF0ZSh7IGRhdGEgfSk7XG4gICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9ycyAvLyBNb25nb0RCIG5lZWRzIGFuIElELCBidXQgd2UgZG9uJ3RcbiAgICAgICAgICAgIGlmICh2ZXJpZmljYXRpb25Ub2tlbi5pZClcbiAgICAgICAgICAgICAgICBkZWxldGUgdmVyaWZpY2F0aW9uVG9rZW4uaWQ7XG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpY2F0aW9uVG9rZW47XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIHVzZVZlcmlmaWNhdGlvblRva2VuKGlkZW50aWZpZXJfdG9rZW4pIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmVyaWZpY2F0aW9uVG9rZW4gPSBhd2FpdCBwLnZlcmlmaWNhdGlvblRva2VuLmRlbGV0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkZW50aWZpZXJfdG9rZW4gfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9ycyAvLyBNb25nb0RCIG5lZWRzIGFuIElELCBidXQgd2UgZG9uJ3RcbiAgICAgICAgICAgICAgICBpZiAodmVyaWZpY2F0aW9uVG9rZW4uaWQpXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB2ZXJpZmljYXRpb25Ub2tlbi5pZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpY2F0aW9uVG9rZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0b2tlbiBhbHJlYWR5IHVzZWQvZGVsZXRlZCwganVzdCByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vd3d3LnByaXNtYS5pby9kb2NzL3JlZmVyZW5jZS9hcGktcmVmZXJlbmNlL2Vycm9yLXJlZmVyZW5jZSNwMjAyNVxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5jb2RlID09PSBcIlAyMDI1XCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhc3luYyBnZXRBY2NvdW50KHByb3ZpZGVyQWNjb3VudElkLCBwcm92aWRlcikge1xuICAgICAgICAgICAgcmV0dXJuIHAuYWNjb3VudC5maW5kRmlyc3Qoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7IHByb3ZpZGVyQWNjb3VudElkLCBwcm92aWRlciB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIGNyZWF0ZUF1dGhlbnRpY2F0b3IoYXV0aGVudGljYXRvcikge1xuICAgICAgICAgICAgcmV0dXJuIHAuYXV0aGVudGljYXRvci5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGF1dGhlbnRpY2F0b3IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgZ2V0QXV0aGVudGljYXRvcihjcmVkZW50aWFsSUQpIHtcbiAgICAgICAgICAgIHJldHVybiBwLmF1dGhlbnRpY2F0b3IuZmluZFVuaXF1ZSh7XG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgY3JlZGVudGlhbElEIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgbGlzdEF1dGhlbnRpY2F0b3JzQnlVc2VySWQodXNlcklkKSB7XG4gICAgICAgICAgICByZXR1cm4gcC5hdXRoZW50aWNhdG9yLmZpbmRNYW55KHtcbiAgICAgICAgICAgICAgICB3aGVyZTogeyB1c2VySWQgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyB1cGRhdGVBdXRoZW50aWNhdG9yQ291bnRlcihjcmVkZW50aWFsSUQsIGNvdW50ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBwLmF1dGhlbnRpY2F0b3IudXBkYXRlKHtcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBjcmVkZW50aWFsSUQgfSxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGNvdW50ZXIgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/@auth/prisma-adapter/index.js\n");

/***/ })

};
;