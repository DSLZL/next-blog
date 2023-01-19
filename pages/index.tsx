import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import Date from "../components/date";

import { getSortedPostsData } from "../utils/posts";

interface Props {
    allPostsData: {
        date: string;
        title: string;
        id: string;
    }[];
}

const Home: NextPage<Props> = ({ allPostsData }) => {
    return (
        <Layout home>
            <div>
                <Head>
                    <title>{siteTitle}</title>
                </Head>

                <section className='text-xl leading-normal text-center'>
                    <p>你好，我是 DSLZL</p>
                    <p>没想到吧？</p>
                </section>

                <section className='text-xl leading-normal pt-4'>
                    <h2 className=' text-2xl my-4 font-bold'>文章</h2>
                    <ul>
                        {allPostsData.map(({ id, date, title }) => (
                            <li key={id} className='mb-5'>
                                <Link href={`/posts/${id}`}>
                                    {title}
                                </Link>
                                <br />
                                <small>
                                    <Date dateString={date} />
                                </small>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
  	// 获取文章列表
    const allPostsData = getSortedPostsData();

    return {
        props: {
            allPostsData,
        },
    };
};

export default Home;
