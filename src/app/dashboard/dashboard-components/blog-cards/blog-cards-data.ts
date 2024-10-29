export interface blogcard {
    title: string,
    subtitle: string,
    subtext: string,
    image: string
}

export const blogcards: blogcard[] = [

    {
        title: 'Sincronización Automotriz',
        subtitle: 'Servicio especializado',
        subtext: 'Incluye limpieza de inyectores y/o carburador, con mano de obra calificada para un rendimiento óptimo.',
        image: 'assets/images/bg/sincronizacion.jpg'
    },
    {
        title: 'Reparación y Mantenimiento',
        subtitle: 'Mano de obra calificada',
        subtext: 'Nuestros mecánicos cuentan con experiencia y están altamente calificados para brindar un servicio de calidad.',
        image: 'assets/images/bg/mantenimiento.jpg'
    },
    {
        title: 'Certificados de Gases',
        subtitle: 'Certificación ISO 9002-34',
        subtext: 'Contamos con todas las certificaciones legales necesarias para ofrecer la mejor calidad y experiencia a nuestros clientes.',
        image: 'assets/images/bg/certificado.jpg'
    },
    {
        title: 'Alineación y Balanceo',
        subtitle: 'Vehículos y camionetas',
        subtext: 'Utilizamos maquinaria de última tecnología para garantizar un servicio preciso y confiable.',
        image: 'assets/images/bg/alineacion.jpg'
    }

] 