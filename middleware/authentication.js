export default async function (context) {
  try {
    const response = await context.app.$axios.post(
      "api/session/get_status",
      {
        dontRenew: "false",
      },
      {
        withCredentials: true,
      }
    );
    if (response.status !== 200 || response.data !== true) {
      context.redirect("/");
    }
  } catch (err) {
    context.redirect("/");
    // context.redirect("/api/dump?data=" + require("util").inspect(err));
  }
}
