import { MatPaginatorIntl } from "@angular/material/paginator";

export class MatPaginatorIntlCro extends MatPaginatorIntl {

    override itemsPerPageLabel = 'Items por página';
    override nextPageLabel = 'Próxima página';
    override previousPageLabel = 'Página anterior';
    override lastPageLabel = 'Última página';
    override firstPageLabel = 'Primer página';

    override getRangeLabel = (page: number, pageSize: number, length: number) => {
        if (length === 0 || pageSize === 0) {
            return `0 of ${length}`
        } 

        const length2 = Math.max(length, 0);
        const startIndex = page * pageSize;
        const endIndex = startIndex < length2 ? Math.min(startIndex + pageSize, length2) : startIndex + pageSize;
        return `${startIndex + 1} - ${endIndex} de ${length2}`;    
    }

}
