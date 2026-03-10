import { User } from "../../../dto/user";
import Layout from "../_layout";
import './style.sass';

Profile.ssp = "/api/profile/:id";

export default function Profile(user: User) {
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
}