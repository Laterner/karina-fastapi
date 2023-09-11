const redirect = (url: any) => {
    window.location = url;
};

export const universalRedirect = (appName: string) => {
    if (window.location.hostname === 'localhost') {
        redirect(`http://localhost:3000/#${appName}`);
    } else {
        redirect(`../${appName}`);
    }
};

export const redirectToOrdersMonitoring = () => {
    if (window.location.hostname === 'localhost') {
        redirect(`http://localhost:8888/}`)
    } else {
        redirect(`../`)
    }
}
