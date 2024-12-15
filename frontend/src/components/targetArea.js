const targetArea = [
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
    area: "Head",
    image:
      "https://img.freepik.com/premium-photo/man-with-head-injury-his-forehead_1309173-59623.jpg",
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
      "https://images.squarespace-cdn.com/content/5fb7f81c2252132f9d6fa150/41e10461-50ba-4fae-87f7-dd4a3c8e15aa/Healthy+Gums.jpg?format=1500w&content-type=image%2Fjpeg",
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
    area: "Spine",
    image: "https://d35oenyzp35321.cloudfront.net/spine_surgery_7be2e8e68e.jpg",
  },
  {
    area: "Knees",
    image:
      "https://www.chambersapothecary.com/wp-content/uploads/2020/05/keeping-your-knees-healthy.jpg",
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
  {
    area: "Immunity",
    image:
      "https://posture-works.com/wp-content/uploads/2022/03/shutterstock_1756606142.jpg",
  },
  {
    area: "Nerves",
    image:
      "https://doc.vortala.com/childsites/uploads/2217/files/Nervous-System.jpg",
  },
  {
    area: "Bones",
    image:
      "https://www.popsci.com/wp-content/uploads/2020/02/04/GLWVYIVH7FBVBPKNLWVMOMPHEU.jpg",
  },
  {
    area: "Blood",
    image:
      "https://plus.unsplash.com/premium_photo-1671543331700-bfc48b948128?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default targetArea;
