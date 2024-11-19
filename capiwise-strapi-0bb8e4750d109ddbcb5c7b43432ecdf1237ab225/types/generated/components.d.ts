import type { Schema, Attribute } from '@strapi/strapi';

export interface CarouselCourseCarousel extends Schema.Component {
  collectionName: 'components_carousel_course_carousels';
  info: {
    displayName: 'Course Carousel';
    icon: 'apps';
  };
  attributes: {
    banner: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'carousel.course-carousel': CarouselCourseCarousel;
    }
  }
}
