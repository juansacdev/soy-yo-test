export interface Entity {
	entityId: number
	name: string
	identificationNumber: string
	expirationDate: string
	contactName: string
	contactMail: string
	ipAddress?: string
	logo?: string
}

export interface Filter {
	startId: number
	endId: number
}
