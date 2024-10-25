export interface Product {
    image: string,
    uname: string,
    gmail: string,
    productName: string,
    status: string,
    weeks: number,
    budget: string
}

export const TopSelling: Product[] = [

    {
        image: 'assets/images/tecnicos/mecanico5.jpg',
        uname: 'Sergio Sandoval',
        gmail: 'sandover@gmail.com',
        productName: 'Tecnico en sincronizacion',
        status: 'danger',
        weeks: 1,
        budget: 'ocupado'
    },
    {
        image: 'assets/images/tecnicos/mecanico7.jpg',
        uname: 'Daniel Arevalo ',
        gmail: 'daniel1234r@gmail.com',
        productName: 'Mecanico general',
        status: 'danger',
        weeks: 2,
        budget: 'ocupado'
    },
    {
        image: 'assets/images/tecnicos/mecanico8.jpg',
        uname: 'David Martinez',
        gmail: 'martinez1254@gmail.com',
        productName: 'Balanceo y alineacion',
        status: 'danger',
        weeks: 3,
        budget: 'ocupado'
    },
    {
        image: 'assets/images/tecnicos/mecanico9.jpg',
        uname: 'Andres Perez',
        gmail: 'perezandres@gmail.com',
        productName: 'Electrico',
        status: 'success',
        weeks: 4,
        budget: 'disponible'
    },

]