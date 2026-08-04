// data/videos.js
// -----------------------------------------------------------------------
// فيديوهات وآراء العملاء (Facebook Reels)
// -----------------------------------------------------------------------

const reelIds = [
  "977612141520643",
  "969261049317920",
  "1506374640841181",
  "2324461408043676",
  "764112029874924",
];

export const clinicVideos = reelIds.map((id, i) => ({
  id,
  embedUrl: `https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F${id}%2F&show_text=false&width=267&t=0`,
  title: `فيديو ${i + 1}`,
  titleEn: `Video ${i + 1}`,
}));

const testimonialIds = [
  "4624781484421995",
  "1727433118704999",
  "1270776701933914",
  "3003395296522092",
];

export const testimonialVideos = testimonialIds.map((id, i) => ({
  id,
  embedUrl: `https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F${id}%2F&show_text=false&width=560&t=0`,
  title: `رأي عميل ${i + 1}`,
  titleEn: `Patient review ${i + 1}`,
}));

export default { clinicVideos, testimonialVideos };
