export function sortAlphabetical(data: any, prop: string) {
    return data.sort((a: any, b: any) => a[prop].localeCompare(b[prop]));
}

export function groupData(data: any, prop: string) {
    return data.reduce((a: any, c: any) => {
        let groupName = prop === 'name' ? c[prop][0] : c[prop];
        a[groupName] = a[groupName] || [];
        a[groupName].push(c);
        return a;
    }, Object.create(null));
}