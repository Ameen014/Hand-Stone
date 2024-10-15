const Host = "https://maryapi.laimonah-scc.com/api"

export const api_Routes = {
    auth: {
        login: `${Host}/auth/admins`,
    },
    language: {
        view: `${Host}/languages`,
    },
    role: {
        view: `${Host}/roles`,
        add: `${Host}/roles`,
        bulkDelete: (id) => (`${Host}/roles/${id}`),
        getOne: (id) => (`${Host}/roles/${id}`),
        update: (id) => (`${Host}/roles/${id}`),
    },
    setting: {
        view: `${Host}/settings`,
        update: `${Host}/settings`,
    },
    permission: {
        view: `${Host}/permissions`,
        add: `${Host}/permissions/assign`,
        bulkDelete: (id) => (`${Host}/permissions/${id}`),
        getOne: (id) => (`${Host}/permissions/${id}`),
        update: (id) => (`${Host}/permissions/${id}`),
    },
    page: {
        view: `${Host}/pages`,
        add: `${Host}/pages`,
        bulkDelete: (id) => (`${Host}/pages/${id}`),
        getOne: (id) => (`${Host}/pages/${id}`),
        update: (id) => (`${Host}/pages/${id}`),
    },
    section: {
        view: `${Host}/pagesSections`,
        add: `${Host}/pagesSections`,
        bulkDelete: (id) => (`${Host}/pagesSections/${id}`),
        getOne: (id) => (`${Host}/pagesSections/${id}`),
        update: (id) => (`${Host}/pagesSections/${id}`),
    },
    blog: {
        view: `${Host}/blogs`,
        add: `${Host}/blogs`,
        bulkDelete: (id) => (`${Host}/blogs/${id}`),
        getOne: (id) => (`${Host}/blogs/${id}`),
        update: (id) => (`${Host}/blogs/${id}`),
    },
    offer: {
        view: `${Host}/offers`,
        add: `${Host}/offers`,
        bulkDelete: (id) => (`${Host}/offers/${id}`),
        getOne: (id) => (`${Host}/offers/${id}`),
        update: (id) => (`${Host}/offers/${id}`),
    },
    admin: {
        view: `${Host}/admins`,
        add: `${Host}/admins`,
        bulkDelete: (id) => (`${Host}/admins/${id}`),
        getOne: (id) => (`${Host}/admins/${id}`),
        update: (id) => (`${Host}/admins/${id}`),
    },
    category: {
        view: `${Host}/categories`,
        add: `${Host}/categories`,
        bulkDelete: (id) => (`${Host}/categories/${id}`),
        getOne: (id) => (`${Host}/categories/${id}`),
        update: (id) => (`${Host}/categories/${id}`),
    },
    product: {
        view: `${Host}/products`,
        viewNew: `${Host}/products?featured=1`,
        add: `${Host}/products`,
        bulkDelete: (id) => (`${Host}/products/${id}`),
        getOne: (id) => (`${Host}/products/${id}`),
        update: (id) => (`${Host}/products/${id}`),
    },
    city: {
        view: `${Host}/cities`,
        add: `${Host}/cities`,
        bulkDelete: (id) => (`${Host}/cities/${id}`),
        getOne: (id) => (`${Host}/cities/${id}`),
        update: (id) => (`${Host}/cities/${id}`),
    },
    order: {
        view: `${Host}/orders`,
        add: `${Host}/orders`,
        bulkDelete: (id) => (`${Host}/orders/${id}`),
        getOne: (id) => (`${Host}/orders/${id}`),
        update: (id) => (`${Host}/orders/${id}`),
    },
    delivery_boy: {
        view: `${Host}/delivery_boys`,
        add: `${Host}/delivery_boys/add`,
        bulkDelete: (id) => (`${Host}/delivery_boys/${id}`),
        getOne: (id) => (`${Host}/delivery_boys/${id}`),
        update: (id) => (`${Host}/delivery_boys/${id}`),
    },
    banner: {
        view: `${Host}/banners`,
        add: `${Host}/banners`,
        bulkDelete: (id) => (`${Host}/banners/${id}`),
        getOne: (id) => (`${Host}/banners/${id}`),
        update: (id) => (`${Host}/banners/${id}`),
    },
    statistics: {
        count: `${Host}/statistics/counts`,
        ordermonth: `${Host}/statistics/monthlyOrders`,
        orderstatus: `${Host}/statistics/ordersPerStatus`,
        productmonth: `${Host}/statistics/monthlyProducts`,
        productstatus: `${Host}/statistics/productsPerCategory`,

    },
    
}
