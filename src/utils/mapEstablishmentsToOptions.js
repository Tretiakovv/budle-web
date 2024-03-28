export const mapEstablishmentsToOptions = (establishments : any[]) => {
    return establishments.map((establishment) => {
        return {id : establishment.id, name : establishment.name}
    })
}