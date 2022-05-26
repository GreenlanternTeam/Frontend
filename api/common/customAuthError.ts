class AuthError extends Error {
	readonly status
	constructor(message: string, status?: number, options?: any) {
		super(message)
		this.cause = options
		this.message = message
		this.status = status
	}
}
export default AuthError
