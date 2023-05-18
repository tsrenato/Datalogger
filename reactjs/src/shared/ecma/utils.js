export function formatString(stg) {
    stg = stg.toLowerCase();
    stg = stg.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
    stg = stg.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
    stg = stg.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
    stg = stg.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
    stg = stg.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
    stg = stg.replace(new RegExp('[Ç]', 'gi'), 'c');
    return stg;
}

export const formatDate = date => {
    let newDate = new Date(date);
    return newDate.toLocaleDateString() + ' às ' + newDate.toLocaleTimeString();
}