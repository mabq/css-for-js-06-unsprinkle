import React from 'react';
import styled from 'styled-components/macro';

const Hero = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <picture>
          <source
            type="image/avif"
            srcset="
            /images/hero-img.avif 1x,
            /images/hero-img@2x.avif 2x,
            /images/hero-img@3x.avif 3x,
          "
          />
          <source
            type="image/webp"
            srcset="
            /images/hero-img.jpg 1x,
            /images/hero-img@2x.jpg 2x,
            /images/hero-img@3x.jpg 3x,
          "
          />
          <HeroImage
            alt="Hero image. Blue eyed cat looking at you on a dark background"
            src="/images/hero-img.jpg"
          />
        </picture>
      </ImageWrapper>
      <Swoop src="/swoop.svg" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  height: 40vh;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: hsl(0deg 0% 1%);
  overflow: hidden; /* for the swoop */

  @media (min-width: 500px) {
  min-height: 400px;
  }
`;

const ImageWrapper = styled.div`
  height: 100%;
`

const HeroImage = styled.img`
  display: block;
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

const Swoop = styled.img`
  position: absolute;
  /*
    Overhang by a couple px to prevent any pixel-rounding
    display issues
  */
  bottom: -2px;
  width: 102%;
  min-width: 500px;
  object-fit: cover;
  object-position: 50% 0%;
`;

export default Hero;
