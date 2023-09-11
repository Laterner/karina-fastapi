const redirect = (url: any) => {
  window.location = url
}

export const redirectToOrdersMonitoring = () => {
  if (window.location.hostname === 'localhost') {
    redirect(`http://localhost:8888/`)
  } else {
    redirect(`../`)
  }
}
