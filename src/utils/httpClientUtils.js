
export function startDownload({ data: file, headers }, fileName) {
    if (!file) return;
    if (!fileName) {
        const dirtyFileName = headers['content-disposition'];
        const regex =
            /filename[^;=\n]*=(?:(\\?['"])(.*?)\1|(?:[^\s]+'.*?')?([^;\n]*))/;
        fileName = dirtyFileName.match(regex)[3];
    }
    const url = window.URL.createObjectURL(new Blob([file]));
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', decodeURI(fileName));
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
}