import Layout from "../_layout";
import './style.scss';

interface AboutProps {
  title: string;
  description: string;
}

About.isSspRequired = true;

export default function About({ title, description }: AboutProps) {
  return (
    <Layout>
      <section id="about">
        <h1>{title}</h1>
        <p>
          This template demonstrates a simple SSR setup with JJSX and Vite. It
          includes single app routing and server-side rendering.
          Also includes styling with Sass.
        </p>
        <p>{description}</p>
      </section>
    </Layout>
  )
}