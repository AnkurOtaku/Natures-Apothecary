const target_area = [
  {
    area: "Hair",
    image:
      "https://images.unsplash.com/photo-1560264641-1b5191cc63e2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    area: "Scalp",
    image:
      "https://plus.unsplash.com/premium_photo-1674841253670-1c84f52344c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    area: "Face",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    area: "Eyes",
    image:
      "https://images.unsplash.com/photo-1534627425233-f7d6335ca734?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    area: "Ears",
    image:
      "https://plus.unsplash.com/premium_photo-1722728055769-fb4f598f1b4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    area: "Nose",
    image:
      "https://plus.unsplash.com/premium_photo-1722887770399-88cd2819cc30?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    area: "Throat",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw8cCPzy9xlyagtw_MPQhun60iJi0xCuXVGT2dvzn6wrw5FISm8YORTjmXPH8ANh7m0v4&usqp=CAU",
  },
  {
    area: "Teeth",
    image:
      "https://images.unsplash.com/photo-1581939511501-4ec557ff0957?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    area: "Gums",
    image:
      "https://cdn.smilespecialistssuite.com.au/wp-content/uploads/2024/02/how-to-identify-unhealthy-gums.jpg",
  },
  {
    area: "Mouth",
    image:
      "https://plus.unsplash.com/premium_photo-1679750867439-f38c7000d128?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    area: "Neck",
    image:
      "https://images.unsplash.com/photo-1711786005061-3687e056b9e3?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    area: "Shoulders",
    image:
      "https://images.unsplash.com/photo-1715532176296-b46557fc7231?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    area: "Arms",
    image:
      "https://images.unsplash.com/photo-1545231160-0f8479b6f371?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    area: "Elbows",
    image:
      "https://plus.unsplash.com/premium_photo-1664478293088-72dec50e8d4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    area: "Wrists",
    image:
      "https://images.unsplash.com/photo-1602682760788-c0f401ea559a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    area: "Hands",
    image:
      "https://images.unsplash.com/photo-1586423669195-d9df98e5a20e?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    area: "Fingers",
    image:
      "https://images.unsplash.com/photo-1549706844-0fbdd0c74065?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    area: "Chest",
    image:
      "https://plus.unsplash.com/premium_photo-1723125592079-ac0923cb92ad?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    area: "Heart",
    image:
      "https://plus.unsplash.com/premium_photo-1722707492894-2839a324624e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    area: "Lungs",
    image:
      "https://plus.unsplash.com/premium_photo-1722947097108-9af829cf1ded?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    area: "Stomach",
    image:
      "https://plus.unsplash.com/premium_photo-1722658473477-0c8ab1b79acf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    area: "Liver",
    image:
      "https://plus.unsplash.com/premium_photo-1723008051623-6180656c4cd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    area: "Kidneys",
    image:
      "https://plus.unsplash.com/premium_photo-1722608200931-5c787cf3053d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    area: "Pancreas",
    image:
      "https://media.post.rvohealth.io/wp-content/uploads/2020/08/732x549_THUMBNAIL_Can_you_live_without_a_pancreas-1-732x549.jpg",
  },
  {
    area: "Intestines",
    image:
      "https://plus.unsplash.com/premium_photo-1723108858066-66b1bd834675?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    area: "Back",
    image:
      "https://images.unsplash.com/photo-1610033955190-7a051f350c7f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    area: "Spine",
    image:
      "https://d35oenyzp35321.cloudfront.net/spine_surgery_7be2e8e68e.jpg",
  },
  {
    area: "Hips",
    image:
      "https://i0.wp.com/embracelife.net.au/wp-content/uploads/2018/04/Hip-pain.jpg?ssl=1",
  },
  {
    area: "Buttocks",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfJiGqyCDSOGQsm1mE2RxQkvjXgk-Nhfs4V2tGuy-NZs9WOvbg2gN5H7FJv6_fq2lYD3A&usqp=CAU",
  },
  {
    area: "Legs",
    image:
      "https://www.astramedicare.ca/uploads/6/4/4/7/6447121/astra-healthy-legs-min_orig.jpg",
  },
  {
    area: "Knees",
    image:
      "https://www.chambersapothecary.com/wp-content/uploads/2020/05/keeping-your-knees-healthy.jpg",
  },
  {
    area: "Ankles",
    image:
      "https://i.shgcdn.com/25671758-cf83-44e8-a800-1621642dc373/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
  },
  {
    area: "Feet",
    image:
      "https://images.squarespace-cdn.com/content/v1/5723a4dc40261dcef4d753b0/4c8869b3-7143-4f4c-a2c5-680e6c059328/image-asset.png",
  },
  {
    area: "Toes",
    image:
      "https://naturalfootgear.com/cdn/shop/articles/Toes_Foot_Health_850x.jpg?v=1620765673",
  },
  {
    area: "Skin",
    image:
      "https://media.istockphoto.com/id/638453120/photo/skin-of-woman-hand.jpg?s=612x612&w=0&k=20&c=LkBCrHlioWa1L1in5XtHdlW565HrkV0cEuY8aW6Y0-w=",
  },
  {
    area: "Muscles",
    image:
      "https://t4.ftcdn.net/jpg/09/80/75/63/360_F_980756378_J3kFcLsDibebOgZ3Z1FFPzhBjQHBUWl5.jpg",
  },
  {
    area: "Joints",
    image:
      "https://t4.ftcdn.net/jpg/00/62/07/95/360_F_62079559_ug3q3V4rccgvHgqrFmmLBFKWUsxGuvNe.jpg",
  },
];

export default target_area;
