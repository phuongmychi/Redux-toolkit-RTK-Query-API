/*
 * Copyright (c) 2022. Phuong My Chi Entertainment Co.,Ltd
 */

export type photoType = {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  liked: boolean;
  alt: string;
};

export const photoDefault = {
  id: 1,
  width: 240,
  height: 240,
  url: "",
  photographer: "",
  photographer_url: "",
  photographer_id: 1,
  avg_color: "",
  src: {
    original: "",
    large2x: "",
    large: "",
    medium: "",
    small: "",
    portrait: "",
    landscape: "",
    tiny: "",
  },
  liked: false,
  alt: "",
};
