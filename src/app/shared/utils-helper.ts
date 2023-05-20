export function sortAlphabetical(data: any, prop: string) {
    return data.sort((a: any, b: any) => a[prop].localeCompare(b[prop]));
}

export function sortById(data: any) {
    return data.sort((a: any, b: any) => a.id - b.id);
}

export function groupData(data: any, prop: string) {
    return data.reduce((a: any, c: any) => {
        let groupName = prop === 'name' ? c[prop][0] : c[prop];
        a[groupName] = a[groupName] || [];
        a[groupName].push(c);
        return a;
    }, Object.create(null));
}