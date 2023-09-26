const redirect = (url: any) => {
  window.location = url
}

export const redirectToOrdersMonitoring = () => {
  if (window.location.hostname === 'localhost') {
    redirect(`http://localhost/admin`)
  } else {
    redirect(`../`)
  }
}
