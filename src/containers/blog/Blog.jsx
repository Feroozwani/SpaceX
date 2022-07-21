import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
    <div className="gpt3__blog section__padding" id="blog">
        <div className="gpt3__blog-heading">
            <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
        </div>
        <div className="gpt3__blog-container">
            <div className="gpt3__blog-container_groupA">
                <Article imgUrl={blog01} date="Sep 26, 2021" text="
Falcon Heavy on pad LC-39A
Falcon Heavy (FH) is a super heavy lift space launch vehicle designed and manufactured by SpaceX. The Falcon Heavy is a variant of the Falcon 9 launch vehicle comprising three Falcon 9 first stages: a reinforced center core, and two additional side boosters. All three boosters are designed to be recovered and reused, although expendable flights are possible to increase the payload capacity. The side boosters assigned to Falcon Heavy's first flight were recovered from two prior Falcon 9 missions" />
            </div>
            <div className="gpt3__blog-container_groupB">
                <Article imgUrl={blog02} date="Sep 26, 2021" text=" The Falcon 1 is a small, partially reusable rocket capable of placing several hundred kilograms into low earth orbit" />
                <Article imgUrl={blog03} date="Sep 26, 2021" text="On 8 September 2005, SpaceX announced the development of the Falcon 9 rocket, which has nine Merlin engines in its first stage." />
                <Article imgUrl={blog04} date="Sep 26, 2021" text="Grasshopper was an experimental technology-demonstrator, suborbital reusable launch vehicle (RLV), a vertical takeoff, vertical landing (VTVL) rocket." />
                <Article imgUrl={blog05} date="Sep 26, 2021" text="The Falcon 1e was a proposed upgrade of the SpaceX Falcon 1" />
            </div>
        </div>
    </div>
);

export default Blog;
