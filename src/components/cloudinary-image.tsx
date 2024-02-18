"use client";

import { Heart } from "@/components/icons/heart";
import { CldImage, CldImageProps, CldVideoPlayer } from "next-cloudinary";
import { useState, useTransition } from "react";
import { FullHeart } from "@/components/icons/full-heart";
import { SearchResult } from "@/app/gallery/page";
import { setAsFavoriteAction } from "@/app/gallery/actions";
import { ImageMenu } from "./image-menu";
import "next-cloudinary/dist/cld-video-player.css";
import { FaPlay } from "react-icons/fa";

export function CloudinaryImage(
  props: {
    imageData: SearchResult;
    width: string;
    height: string;
    onUnheart?: (unheartedResource: SearchResult) => void;
  } & Omit<CldImageProps, "src">
) {
  const { imageData, onUnheart } = props;

  const [isFavorited, setIsFavorited] = useState(
    imageData.tags.includes("favorite")
  );

  return (
    <div className="relative flex items-center justify-center">
      {imageData.resource_type === "video" && (
        <CldImage {...props} src={imageData.public_id} assetType="video" />
      )}
      {imageData.resource_type === "image" && (
        <CldImage {...props} src={imageData.public_id} />
      )}

      {imageData.resource_type === "video" && (
        <FaPlay className="absolute hover:text-white text-slate-300 cursor-pointer" />
      )}
    </div>
  );
}
