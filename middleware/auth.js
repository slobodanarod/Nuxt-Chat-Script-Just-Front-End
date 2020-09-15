export default function (context) {
  if (!context.store.getters.getAuthenticated)
  {
    context.redirect("/");
  }else{

  }
}
