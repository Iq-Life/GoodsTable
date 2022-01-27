import axios from "axios";

export const instance = axios.create({
	baseURL: 'https://datainlife.ru/'
})

export const productsApi = {
	getProducts() {
		return instance.get<Array<ProductsType>>('junior_task/get_products.php').then(res => res.data)
	}
}

export type ProductsType = {
	rid: string
	rtime: string
	resource_id: string
	rname: string
	rparent: string
	rlevel: string
	urlalias: string
	rposition: string
	rtitle: string
	icon: string
	description: string
	goods: GoodsType[]
}
export type GoodsType = {
	gid: string,
	gname: string
	gprice: string
	gartikul: string
	ggood_code: string
	gquantity: string
	gquantity_reserved: string
	ged: string
	gweight: string
	gstore: string
	gvendor: string
	gprice_cat_id: string
	gnote_file: string
	gpict: string
	gvendor_id: string
	gstate: string
	gnever_visible: string
	ggroup_id: string
	gcurrency: string
	picture_url: string
	sum: number
}