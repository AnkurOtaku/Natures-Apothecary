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
      "https://media.istockphoto.com/id/521182903/photo/woman-holds-her-throat-sore-throat.jpg?s=2048x2048&w=is&k=20&c=cDaTbUHhkVAvg514bUDlJJueJlkjGeGsNcTUuLMuLTo=",
  },
  {
    area: "Teeth",
    image:
      "https://images.unsplash.com/photo-1581939511501-4ec557ff0957?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    area: "Gums",
    image:
      "https://media.istockphoto.com/id/1788160073/photo/woman-showing-healthy-gums-on-white-background-closeup-space-for-text.jpg?s=2048x2048&w=is&k=20&c=TLYjzSm29EwNg8U59rqiZ5OGZgHr30ElxxWC4kEz590=",
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
      "https://media.istockphoto.com/id/1130313886/photo/human-pancreas-anatomy.webp?s=2048x2048&w=is&k=20&c=QrSmKKiq--dOxlwd8KChNCclye5puMDSTkh-O904Ebo=",
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
      "https://media.istockphoto.com/id/975681354/photo/lower-back-pain.jpg?s=2048x2048&w=is&k=20&c=Ow7jpVBJPVa2gsk45RY5HKRX-QWwWHYleOibyAbUawE=",
  },
  {
    area: "Hips",
    image:
      "https://media.istockphoto.com/id/1357527633/photo/hip-pain-woman-suffering-from-osteoarthritis-at-home.jpg?s=2048x2048&w=is&k=20&c=APQ877GR-B-Vo8s-8lKNohudT7qNqy11TGqQXkBRDDs=",
  },
  {
    area: "Buttocks",
    image:
      "https://media.istockphoto.com/id/1318151496/photo/man-suffer-from-hemorrhoids-man-hand-holding-his-bottom-because-hemorrhoids-man-with.jpg?s=2048x2048&w=is&k=20&c=4W8PiNkmSWu7ynm5NnTi9ui11JFAXNgD0cct5XxG1P0=",
  },
  {
    area: "Legs",
    image:
      "https://media.istockphoto.com/id/616002088/photo/running-on-tracks.jpg?s=2048x2048&w=is&k=20&c=Ij15N95D2AV9kc_6p0lY7WgcmS2-ZuefO74x_KlwM5Q=",
  },
  {
    area: "Knees",
    image:
      "https://media.istockphoto.com/id/1254522648/photo/pain-in-the-knee-joints-of-the-child-the-boys-knees-hurt.jpg?s=2048x2048&w=is&k=20&c=70dmm5dnpdjzQuKjZHWlDwcS-hBH4Sv6vesJQWVpUmU=",
  },
  {
    area: "Ankles",
    image:
      "https://media.istockphoto.com/id/1417849907/photo/senior-woman-sitting-on-sofa-holds-her-ankle-injury-feeling-pain.jpg?s=2048x2048&w=is&k=20&c=eP48HEC60Gv2E4ExxPSAjr3w_D04Za0HyGhdXY6XZkE=",
  },
  {
    area: "Feet",
    image:
      "https://media.istockphoto.com/id/1045328130/photo/closeup-young-woman-feeling-pain-in-her-foot.jpg?s=2048x2048&w=is&k=20&c=zX5jc9pm8gIRn3aXDOk65HGzObyCd6U_Co3jUiYsMhQ=",
  },
  {
    area: "Toes",
    image:
      "https://media.istockphoto.com/id/152138208/photo/beautiful-female-feet-with-french-pedicure-closeup.jpg?s=2048x2048&w=is&k=20&c=QkwPeVXkqLmnEXnaZt54YfQ05bF5RdOzpfcN4xhNaXY=",
  },
  {
    area: "Skin",
    image:
      "https://media.istockphoto.com/id/1010039320/photo/extreme-close-up-of-tanned-skin-on-male-hand.jpg?s=2048x2048&w=is&k=20&c=2keulKxlNeGHj8-PAKdsLZd6CXLXQUQlqVtEZG74nZE=",
  },
  {
    area: "Muscles",
    image:
      "https://media.istockphoto.com/id/1017804196/vector/muscles-of-the-chest.jpg?s=2048x2048&w=is&k=20&c=AXc8Y1gr0cOgTj1hV_2qX22NvZtgETFTm7A8MiNKCxM=",
  },
  {
    area: "Joints",
    image:
      "https://media.istockphoto.com/id/1156927918/photo/pain-in-all-joints-conceptual-artwork-3d-illustration.jpg?s=2048x2048&w=is&k=20&c=C4Gl85K3gO87U0sy1opbOWd_8PD4Q5X8P-tnsQHzO60=",
  },
];

export default target_area;
