import { Burnish } from "@carats/render"
import { User } from "../../../dto/user";
import Layout from "../_layout";
import './style.sass';

export default Burnish<User>((user) => {
  return (
    <Layout>
      <section id="profile">
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.website}</p>
      </section>
    </Layout>
  )
})