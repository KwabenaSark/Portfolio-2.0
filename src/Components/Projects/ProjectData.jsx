import React from 'react';
import styled from 'styled-components';

const ProjectData = [
  {
    Title: 'Bsc Computing with Business Management',
    Subtitle: 'Predicted first-class honours 2024',
    Description: (
      <>
        This ongoing journey has been exceptional. I've gained diverse knowledge in tech and business,
        earning multiple certificates along the way, solidifying my expertise and versatility :D.
      </>
    ),
    Media: '.mp4', //assets/PreviewMedia/IMG_0375.mp4
  },
  {
    Title: 'Business Finance Tracker with A.I',
    Subtitle: 'Early 2023',
    Description: (
      <>
        Unlock the power of financial sorcery! This AI-driven system
        is your trusty wand, casting spells of effortless number-crunching and money management. Wave goodbye to financial woes and let the enchantment begin!!
      </>
    ),
    Media: '.mp4',
    Links:(<> <a href='https://github.com/KwabenaSark/Fianance-Tracker-with-A.I#readme'>Readme</a> <a href='https://github.com/KwabenaSark/Fianance-Tracker-with-A.I#readme'>Discover the Magic</a></>),
  },
  {
    Title: 'Earth-1610',
    Subtitle: 'Summer of 2023: June - Present',
    Description: (
      <>
        So I woke up one morning and decided to craft my very own open-world RPG game.
        Perhaps I've Boy-Bossed a little too close to the sun!
      </>
    ),
    Media: '.mp4',
    Links:(<> <a href='https://github.com/KwabenaSark/Earth-1610'>Readme</a> <a href='https://github.com/KwabenaSark/Earth-1610'>Discover the Magic</a></>),
  },
  {
    Title: 'Portfolio',
    Subtitle: 'May 2023',
    Description: (
      <>
        You're on the same page right now! Built using React, ThreeJS (GSAP), and many more.
        Check my <a href='https://stirring-starburst-77aff0.netlify.app/' target="_blank" style={{ textDecoration: 'underline', color:'blue' }}>previous portfolio</a> to see my skill progression.
      </>
    ),
    Media: '.mp4',
    Links:(<> <a href=''>Inception Moment</a></>),
  },
];



export default ProjectData;
