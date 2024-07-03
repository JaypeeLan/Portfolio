import Head from "next/head";

export default function Home() {
  return (
    <div className="home" id="home">
      <Head>
        <title>Home</title>
      </Head>

      <h1>
        Hi, <span>I am Laniran JohnPaul</span>
      </h1>

      <p>
        A frontend engineer interested in bringing your ideas to life, solving
        real life problems and providing new ideas to your organisation using
        latest technologies.
      </p>

      <a
        href="/laniran_johnpaul_CV.pdf"
        target="_blank"
        className="download"
        download="Laniran_johnpaul_CV"
      >
        {" "}
        RESUME
      </a>
    </div>
  );
}
