export interface Pedido {
	_id: string,
	creado: Date,
	total: number,
	user: object,
	[detalles: number] : any
}
