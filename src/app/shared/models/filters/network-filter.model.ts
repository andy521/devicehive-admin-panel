import { SORT_DEFAULT } from '../../constants/filters';

export class NetworkFilter {
    constructor(
        public name: string = '',
        public sortField: string = SORT_DEFAULT.FIELD.NETWORK,
        public sortOrder: string = SORT_DEFAULT.ORDER
    ) {
    }

    clear() {
        this.name = '';
    }

    toObject() {
        return Object.assign({}, this);
    }
}
