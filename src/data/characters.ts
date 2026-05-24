export interface Character {
  id: string;
  name: string;
  type: 'Tướng' | 'Đơn Vị' | 'Kế Sách' | 'Bẫy' | 'Sự Kiện' | 'Mệnh Lệnh';
  subtype?: string;
  image?: string;
  biography?: string;
}

export const characters: Character[] = [
  // 16 Tướng Chính
  {
    id: 'ly-thuong-kiet',
    name: 'Lý Thường Kiệt',
    type: 'Tướng',
    subtype: 'Bộ Binh',
    image: '/img/image1.jpeg',
    biography: 'Với tư duy quân sự thiên tài, ông chủ trương "ngồi yên đợi giặc không bằng đem quân đánh trước để bẻ gãy mũi nhọn của giặc" (Tiên phát chế nhân). Khi chặn đứng quân Tống tại phòng tuyến sông Như Nguyệt, để khích lệ tinh thần quân sĩ đang mệt mỏi, ông đã cho người đêm tối vào đền thờ Trương Hống, Trương Hát đọc vang bài thơ "Nam quốc sơn hà". Quân sĩ nghe tiếng thơ rền vang như lời của thần linh, khí thế tăng vọt, lập tức tổng tấn công quét sạch quân thù.'
  },
  {
    id: 'tran-quoc-toan',
    name: 'Trần Quốc Toản',
    type: 'Tướng',
    subtype: 'Bộ Binh',
    image: '/img/image2.jpeg',
    biography: 'Khi quân Nguyên chuẩn bị xâm lược lần hai, vua Trần họp bàn ban mưu kế tại bến Bình Than. Vì còn quá nhỏ tuổi (16 tuổi), Trần Quốc Toản không được vào dự họp. Cậu vừa hổ thẹn, vừa tức giận quân giặc đến nỗi tay siết chặt lại, bóp nát quả cam được vua ban lúc nào không hay. Sau đó, cậu lui về, tự gom góp gia nô, đóng chiến thuyền và thêu lá cờ lớn sáu chữ: "Phá cường địch, báo hoàng ân" xông pha trận mạc.'
  },
  {
    id: 'dinh-bo-linh',
    name: 'Đinh Bộ Lĩnh',
    type: 'Tướng',
    subtype: 'Bộ Binh',
    image: '/img/image3.jpeg',
    biography: 'Thuở nhỏ, Đinh Bộ Lĩnh đi chăn trâu cho người chú. Ông thường cùng lũ trẻ trong vùng lấy hoa lau làm cờ, bày trận đánh nhau. Nhờ mưu trí, ông được đám trẻ tôn làm "vua", chắp tay làm kiệu rước đi. Có lần người chú tức giận vác dao đuổi đánh, Đinh Bộ Lĩnh chạy đến bến sông, bỗng có hai con rồng vàng hiện lên đưa ông qua sông, khiến người chú sợ hãi sụp lạy. Sau này ông dẹp loạn 12 sứ quân, lập ra nhà Đinh.'
  },
  {
    id: 'nguyen-tri-phuong',
    name: 'Nguyễn Tri Phương',
    type: 'Tướng',
    subtype: 'Bộ Binh',
    image: '/img/image4.jpeg',
    biography: 'Khi thực dân Pháp nổ súng tấn công thành Hà Nội lần thứ nhất (1873), dù tuổi đã cao (73 tuổi), Nguyễn Tri Phương vẫn tự mình ra chiến lũy đốc chiến. Con trai ông là Nguyễn Lâm trúng đạn hy sinh, bản thân ông cũng bị thương nặng ở bụng và bị giặc Pháp bắt giữ. Người Pháp rất khâm phục tài năng của ông nên ra sức cứu chữa, dâng đồ ăn ngon nhằm mua chuộc. Ông đã khảng khái gạt đi và nói: "Bây giờ nếu ta chỉ dật dờ dại dột mà sống, sao bằng thong dong chết về nơi chính trực". Sau đó ông tuyệt thực gần một tháng rồi qua đời trong sự kính trọng của nhân dân.'
  },
  {
    id: 'quang-trung',
    name: 'Quang Trung',
    type: 'Tướng',
    subtype: 'Kỵ Binh',
    image: '/img/image5.jpeg',
    biography: 'Tết Kỷ Dậu 1789, 29 vạn quân Thanh xâm lược nước ta. Từ Huế, Nguyễn Huệ lên ngôi hoàng đế (Quang Trung) rồi lập tức chỉnh đốn quân đội ra Bắc. Ông dùng chiến thuật hành quân thần tốc: Cứ hai người khênh một người nằm võng nghỉ ngơi, thay phiên nhau đi liên tục không nghỉ ngày đêm. Khi đánh đồn Ngọc Hồi, ông cho quân ghép những tấm ván lớn bên ngoài quấn rơm dấp nước để chống đạn súng hỏa mai của giặc, mở đường cho kỵ binh và tượng binh xông vào tiêu diệt sạch quân Thanh trước sự ngỡ ngàng của chúng.'
  },
  {
    id: 'pham-ngu-lao',
    name: 'Phạm Ngũ Lão',
    type: 'Tướng',
    subtype: 'Kỵ Binh',
    image: '/img/image6.jpeg',
    biography: 'Thuở còn là một thanh niên nghèo ở làng Phù Ủng, Phạm Ngũ Lão ngồi bên vệ đường đan sọt mà đầu óc mải mê suy nghĩ về binh pháp và vận nước. Đúng lúc đó, kiệu của Hưng Đạo Vương đi qua, quân lính mở đường lấy giáo đâm vào đùi ông chảy máu để đuổi đi nhưng ông vẫn ngồi im phăng phắc, không hề hay biết. Trần Hưng Đạo thấy lạ bèn dừng kiệu hỏi chuyện, nhận ra đây là một bậc kỳ tài nên đã thu nạp, sau này còn gả con gái nuôi cho ông.'
  },
  {
    id: 'le-loi',
    name: 'Lê Lợi',
    type: 'Tướng',
    subtype: 'Kỵ Binh',
    image: '/img/image7.jpeg',
    biography: 'Để chống lại ách đô hộ của nhà Minh, Lê Lợi phất cờ khởi nghĩa Lam Sơn. Những năm đầu, nghĩa quân gặp vô vàn khó khăn, có lúc phải ăn củ mài, rau rừng qua ngày ("nếm mật nằm gai"). Ông được Long Quân cho mượn gươm thần để đánh đuổi giặc Minh. Sau khi kháng chiến thành công, lên ngôi vua, trong một lần dạo chơi trên hồ Tả Vọng, Rùa Vàng đã hiện lên đòi lại gươm. Vua trả gươm, từ đó hồ có tên là Hồ Hoàn Kiếm.'
  },
  {
    id: 'le-lai',
    name: 'Lê Lai',
    type: 'Tướng',
    subtype: 'Kỵ Binh',
    image: '/img/image8.jpeg',
    biography: 'Trong một trận chiến sinh tử tại núi Chí Linh, nghĩa quân Lam Sơn bị quân Minh bao vây chặt chẽ, lương thực cạn kiệt, tính mạng Lê Lợi ngàn cân treo sợi tóc. Trước tình thế nguy cấp, Lê Lai đã tình nguyện đóng giả làm Lê Lợi. Ông mặc áo hoàng bào, cưỡi voi chiến, dẫn một toán quân liều chết xông thẳng vào vòng vây giặc. Quân Minh tưởng đó là vua Lê nên dồn toàn lực bắt giết. Lê Lai hy sinh anh dũng, nhờ sự hy sinh đó, Lê Lợi và bộ chỉ huy nghĩa quân mới có cơ hội phá vây rút lui an toàn để làm nên đại nghiệp sau này.'
  },
  {
    id: 'ngo-quyen',
    name: 'Ngô Quyền',
    type: 'Tướng',
    subtype: 'Thủy Binh',
    image: '/img/image9.jpeg',
    biography: 'Ngô Quyền là nhà quân sự tài ba, ông chủ yếu nổi tiếng với kế sách phòng thủ thông minh. Khi bị tấn công, Ngô Quyền thường dùng những bẫy tinh vi kết hợp với quân thủy chiến để tạo thế bất lợi cho quân địch. Sự hiểu biết sâu sắc về địa hình sông nước và khí tượng đã giúp ông có nhiều chiến thắng liên tiếp, bảo vệ giang sơn Đại Việt khỏi các cuộc xâm lược từ phía Bắc.'
  },
  {
    id: 'tran-hung-dao',
    name: 'Trần Hưng Đạo',
    type: 'Tướng',
    subtype: 'Thủy Binh',
    image: '/img/image10.jpeg',
    biography: 'Cha của ông có mối thù sâu sắc với nhà vua (Trần Thái Tông). Trước khi chết, cha ông dặn phải cướp ngôi. Nhưng Trần Hưng Đạo đặt giang sơn lên trên hết. Để xóa bỏ hiềm khích với người em họ là Thái sư Trần Quang Khải, ông đã chủ động mời Trần Quang Khải lên thuyền của mình, tự tay nấu nước thơm và tắm gội cho em. Sự hòa hợp của hai người đứng đầu đã tạo nên sức mạnh "vua tôi đồng lòng" đánh bại quân Nguyên Mông. Khi vua Trần lo lắng hỏi có nên hàng không, ông khẳng định: "Nếu bệ hạ muốn hàng, xin hãy chém đầu thần trước đã".'
  },
  {
    id: 'yet-kieu',
    name: 'Yết Kiêu',
    type: 'Tướng',
    subtype: 'Thủy Binh',
    image: '/img/image11.jpeg',
    biography: 'Là gia nô thân tín của Trần Hưng Đạo, Yết Kiêu nổi tiếng với biệt tài bơi lặn. Ông có thể lặn dưới nước suốt một ngày đêm mà không cần ngoi lên. Trong cuộc chiến chống quân Nguyên, cứ đêm đến, ông lại lặn xuống đáy sông, dùng dùi sắt đục thủng thuyền chiến của giặc khiến chúng chìm nghỉm trong im lặng. Khi bị giặc bắt và tra hỏi nước Nam có bao nhiêu người lặn được như ông, ông kiêu hãnh đáp: "Nước Nam có hàng vạn người như tôi, tôi chỉ là kẻ tài hèn nhất", sau đó thừa cơ sơ hở liền nhảy xuống nước trốn thoát.'
  },
  {
    id: 'tran-khanh-du',
    name: 'Trần Khánh Dư',
    type: 'Tướng',
    subtype: 'Thủy Binh',
    image: '/img/image12.jpeg',
    biography: 'Trần Khánh Dư là người có tài quân sự nhưng tính tình phóng túng, từng bị bãi chức, tịch thu tài sản vì phạm tội. Ông bỏ về vùng Chí Linh làm nghề bán than để sinh sống. Khi vận nước lâm nguy (quân Nguyên xâm lược lần 3), vua Trần Nhân Tông họp hội nghị Bình Than, tình cờ nhìn thấy một thuyền bán than đi qua, người chèo thuyền đội nón lá, mặc áo ngắn chính là Trần Khánh Dư. Vua lập tức triệu ông lên, phục chức tướng quân. Chính ông sau đó đã lập công lớn tại trận Vân Đồn, đánh tan đoàn thuyền lương của Trương Văn Hổ, bẻ gãy xương sống của quân Nguyên.'
  },
  {
    id: 'bui-thi-xuan',
    name: 'Bùi Thị Xuân',
    type: 'Tướng',
    subtype: 'Tượng Binh',
    image: '/img/image13.jpeg',
    biography: 'Là một trong "Tây Sơn ngũ phụng thư", Bùi Thị Xuân nổi tiếng với tài bắn cung, đấu kiếm và đặc biệt là biệt tài thuần dưỡng voi chiến. Bà đã xây dựng một đội tượng binh dũng mãnh, là nỗi khiếp sợ của quân địch. Khi vương triều Tây Sơn sụp đổ, bà bị vua Gia Long nhà Nguyễn bắt sống và kết án tử hình bằng hình thức tàn khốc: cho voi giày. Đứng trước thềm cái chết, bà vẫn hiên ngang, khí phách không hề run sợ, khiến chính con voi chiến cũng phải chùn bước không dám dẫm lên bà.'
  },
  {
    id: 'ba-trieu',
    name: 'Bà Triệu',
    type: 'Tướng',
    subtype: 'Tượng Binh',
    image: '/img/image14.jpeg',
    biography: 'Năm 248, Triệu Thị Trinh cùng anh trai khởi nghĩa chống quân Ngô. Khi có người khuyên bà nên lấy chồng, bà đã để lại một tuyên ngôn bất hủ: "Tôi muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ, chém cá kình ở biển Đông, giành lại giang sơn, cởi ách nô lệ, chứ không thèm bắt chước người đời cúi đầu khom lưng làm tì thiếp người ta!". Khi ra trận, bà thường mặc áo giáp vàng, đi guốc ngà, cài trâm vàng, cưỡi voi trắng một ngà vô cùng uy dũng làm quân giặc khiếp đảm.'
  },
  {
    id: 'le-hoan',
    name: 'Lê Hoàn',
    type: 'Tướng',
    subtype: 'Tượng Binh',
    image: '/img/image15.jpeg',
    biography: 'Khi triều Đinh suy yếu, quân Tống lăm le xâm lược. Vì đại cuộc, Thái hậu Dương Vân Nga đã đưa chiếc áo long bào trao cho Thập đạo tướng quân Lê Hoàn, suy tôn ông lên ngôi vua để lãnh đạo kháng chiến. Ông cũng là vị vua đầu tiên trong lịch sử mở đầu phong tục "Cày ruộng Tịch điền" vào mùa xuân để khuyến khích nông nghiệp, đích thân xuống ruộng cày vài đường cơ bản trước sự chứng kiến của bá tánh.'
  },
  {
    id: 'da-tuong',
    name: 'Dã Tượng',
    type: 'Tướng',
    subtype: 'Tượng Binh',
    image: '/img/image16.jpeg',
    biography: 'Dã Tượng là một chỉ huy tài ba, nổi tiếng với khả năng chỉ huy các đơn vị tượng binh trong các trận chiến quy mô lớn. Với sự trung thành vô điều kiện và chiến thuật linh hoạt, Dã Tượng đã trở thành cánh tay phải của nhiều vị vua, góp phần lớn vào các chiến thắng quan trọng trong lịch sử Đại Việt.'
  },

  // Đơn Vị - Bộ Binh
  { id: 'dan-binh-giu-luy',
    image: '/img/image17.jpeg',
    name: 'Dân Binh Giữ Lũy', type: 'Đơn Vị', subtype: 'Bộ Binh' },
  {
    id: 'khien-binh',
    image: '/img/image18.jpeg',
    name: 'Khiên Binh', type: 'Đơn Vị', subtype: 'Bộ Binh'
  },
  {
    id: 'mac-binh',
    image: '/img/image19.jpeg',
    name: 'Mác Binh', type: 'Đơn Vị', subtype: 'Bộ Binh'
  },
  {
    id: 'dao-phu-tien-phong',
    image: '/img/image20.jpeg',
    name: 'Đao Phủ Tiên Phong', type: 'Đơn Vị', subtype: 'Bộ Binh'
  },
  {
    id: 'cam-ve-quan',
    image: '/img/image21.jpeg',
    name: 'Cấm Vệ Quân', type: 'Đơn Vị', subtype: 'Bộ Binh'
  },
  {
    id: 'no-thu-thanh',
    image: '/img/image22.jpeg',
    name: 'Nỏ Thủ Thành', type: 'Đơn Vị', subtype: 'Bộ Binh'
  },
  {
    id: 'quan-tiep-vien',
    image: '/img/image23.jpeg',
    name: 'Quân Tiếp Viện', type: 'Đơn Vị', subtype: 'Bộ Binh'
  },
  {
    id: 've-quan-trung-quan',
    image: '/img/image24.jpeg',
    name: 'Vệ Quân Trung Quân', type: 'Đơn Vị', subtype: 'Bộ Binh'
  },

  // Đơn Vị - Kỵ Binh
  { id: 'ky-binh-tham-bao',
    image: '/img/image25.jpeg',
    name: 'Kỵ Binh Thám Báo', type: 'Đơn Vị', subtype: 'Kỵ Binh' },
  {
    id: 'ky-binh-truong-thuong',
    image: '/img/image26.jpeg',
    name: 'Kỵ Binh Trường Thương', type: 'Đơn Vị', subtype: 'Kỵ Binh'
  },
  {
    id: 'ky-xa',
    image: '/img/image27.jpeg',
    name: 'Kỵ Xạ', type: 'Đơn Vị', subtype: 'Kỵ Binh'
  },
  {
    id: 'thiet-ky',
    image: '/img/image28.jpeg',
    name: 'Thiết Kỵ', type: 'Đơn Vị', subtype: 'Kỵ Binh'
  },
  {
    id: 'du-ky-chi-vien',
    image: '/img/image29.jpeg',
    name: 'Du Kỵ Chi Viện', type: 'Đơn Vị', subtype: 'Kỵ Binh'
  },
  {
    id: 'ky-binh-ho-tong',
    image: '/img/image30.jpeg',
    name: 'Kỵ Binh Hộ Tông', type: 'Đơn Vị', subtype: 'Kỵ Binh'
  },
  {
    id: 'hoa-toc-trinh-ky',
    image: '/img/image31.jpeg',
    name: 'Hỏa Tốc Trinh Kỵ', type: 'Đơn Vị', subtype: 'Kỵ Binh'
  },
  {
    id: 'cam-ky-quan',
    image: '/img/image32.jpeg',
    name: 'Cấm Kỵ Quân', type: 'Đơn Vị', subtype: 'Kỵ Binh'
  },

  // Đơn Vị - Thủy Binh
  { id: 'thuyen-nhe-trinh-sat',
    image: '/img/image33.jpeg',
    name: 'Thuyền Nhẹ Trinh Sát', type: 'Đơn Vị', subtype: 'Thủy Binh' },
  {
    id: 'thuy-binh-mac',
    image: '/img/image34.jpeg',
    name: 'Thủy Binh Mác', type: 'Đơn Vị', subtype: 'Thủy Binh'
  },
  {
    id: 'no-thuy-chien',
    image: '/img/image35.jpeg',
    name: 'Nỏ Thủy Chiến', type: 'Đơn Vị', subtype: 'Thủy Binh'
  },
  {
    id: 'hoa-thuyen',
    image: '/img/image36.jpeg',
    name: 'Hỏa Thuyền', type: 'Đơn Vị', subtype: 'Thủy Binh'
  },
  {
    id: 'tho-lan-tap-kich',
    image: '/img/image37.jpeg',
    name: 'Thợ Lặn Tập Kích', type: 'Đơn Vị', subtype: 'Thủy Binh'
  },
  {
    id: 'thuyen-van-chan-song',
    image: '/img/image38.jpeg',
    name: 'Thuyền Ván Chắn Sóng', type: 'Đơn Vị', subtype: 'Thủy Binh'
  },
  {
    id: 'thuy-quan-tinh-nhue',
    image: '/img/image39.jpeg',
    name: 'Thủy Quân Tinh Nhuệ', type: 'Đơn Vị', subtype: 'Thủy Binh'
  },
  { id: 'doi-coc-ngam',
    image: '/img/image40.jpeg',
    name: 'Đội Cọc Ngầm', type: 'Đơn Vị', subtype: 'Thủy Binh' },

  // Đơn Vị - Tượng Binh
  { id: 'tuong-nai-chien',
    image: '/img/image41.jpeg',
    name: 'Tượng Nài Chiến', type: 'Đơn Vị', subtype: 'Tượng Binh' },
  {
    id: 'tuong-binh-pha-tran',
    image: '/img/image42.jpeg',
    name: 'Tượng Binh Phá Trận', type: 'Đơn Vị', subtype: 'Tượng Binh'
  },
  {
    id: 'tuong-giap-nang',
    image: '/img/image43.jpeg',
    name: 'Tượng Giáp Nặng', type: 'Đơn Vị', subtype: 'Tượng Binh'
  },
  {
    id: 'tuong-binh-ho-tran',
    image: '/img/image44.jpeg',
    name: 'Tượng Binh Hộ Trận', type: 'Đơn Vị', subtype: 'Tượng Binh'
  },
  {
    id: 'tuong-cung',
    image: '/img/image45.jpeg',
    name: 'Tượng Cung', type: 'Đơn Vị', subtype: 'Tượng Binh'
  },
  {
    id: 'tuong-xung-phong',
    image: '/img/image46.jpeg',
    name: 'Tượng Xung Phong', type: 'Đơn Vị', subtype: 'Tượng Binh'
  },
  {
    id: 'tuong-chan-loi',
    image: '/img/image47.jpeg',
    name: 'Tượng Chặn Lối', type: 'Đơn Vị', subtype: 'Tượng Binh'
  },
  {
    id: 'voi-chien-cam-quan',
    image: '/img/image48.jpeg',
    name: 'Voi Chiến Cấm Quân', type: 'Đơn Vị', subtype: 'Tượng Binh'
  },

  // Kế Sách
  { id: 'kich-len-si-khi',
    image: '/img/image49.jpeg',
    name: 'Khích Lệ Sĩ Khí', type: 'Kế Sách' },
  {
    id: 'chinh-don-hang-ngu',
    image: '/img/image50.jpeg',
    name: 'Chỉnh Đốn Hàng Ngũ', type: 'Kế Sách'
  },
  {
    id: 'truyen-hich-xuat-quan',
    image: '/img/image51.jpeg',
    name: 'Truyền Hịch Xuất Quân', type: 'Kế Sách'
  },
  {
    id: 'nghi-binh-danh-lac',
    image: '/img/image52.jpeg',
    name: 'Nghi Binh Đánh Lạc', type: 'Kế Sách'
  },
  {
    id: 'pha-vay-mo-duong',
    image: '/img/image53.jpeg',
    name: 'Phá Vây Mở Đường', type: 'Kế Sách'
  },
  {
    id: 'tiep-te-luong-thao',
    image: '/img/image54.jpeg',
    name: 'Tiếp Tế Lương Thảo', type: 'Kế Sách'
  },
  {
    id: 'hoa-cong',
    image: '/img/image55.jpeg',
    name: 'Hỏa Công', type: 'Kế Sách'
  },
  {
    id: 'binh-quy-than-toc',
    image: '/img/image56.jpeg',
    name: 'Binh Quý Thần Tốc', type: 'Kế Sách'
  },
  {
    id: 'co-thu-doanh-trai',
    image: '/img/image57.jpeg',
    name: 'Cố Thủ Doanh Trại', type: 'Kế Sách'
  },
  {
    id: 'du-dich-sau',
    image: '/img/image58.jpeg',
    name: 'Dụ Địch Sâu', type: 'Kế Sách'
  },
  {
    id: 'dieu-binh-khien-tuong',
    image: '/img/image59.jpeg',
    name: 'Điều Binh Khiển Tướng', type: 'Kế Sách'
  },
  {
    id: 'phan-cong-quyet-thang',
    image: '/img/image60.jpeg',
    name: 'Phản Công Quyết Thắng', type: 'Kế Sách'
  },

  // Bẫy
  { id: 'bai-coc-ngam',
    image: '/img/image61.jpeg',
    name: 'Bãi Cọc Ngầm', type: 'Bẫy' },
  { id: 'ham-chong',
    image: '/img/image62.jpeg',
    name: 'Hầm Chông', type: 'Bẫy' },
  {
    id: 'phuc-binh-hai-canh',
    image: '/img/image63.jpeg',
    name: 'Phục Binh Hai Cánh', type: 'Bẫy'
  },
  {
    id: 'dot-kho-luong',
    image: '/img/image64.jpeg',
    name: 'Đốt Kho Lương', type: 'Bẫy'
  },
  {
    id: 'gia-lui-nhu-dich',
    image: '/img/image65.jpeg',
    name: 'Giả Lui Nhử Địch', type: 'Bẫy'
  },
  {
    id: 'trong-lenh-hon-chien',
    image: '/img/image66.jpeg',
    name: 'Trống Lệnh Hỗn Chiến', type: 'Bẫy'
  },
  {
    id: 'khoa-cau-rut-quan',
    image: '/img/image67.jpeg',
    name: 'Khóa Cầu Rút Quân', type: 'Bẫy'
  },
  {
    id: 'mat-bao-doanh-trai',
    image: '/img/image68.jpeg',
    name: 'Mật Báo Doanh Trại', type: 'Bẫy'
  },

  // Sự Kiện
  { id: 'bach-dang-day-song',
    image: '/img/image69.jpeg',
    name: 'Bạch Đằng Dậy Sóng', type: 'Sự Kiện' },
  {
    id: 'hich-tuong-si-ban-xuong',
    image: '/img/image70.jpeg',
    name: 'Hịch Tướng Sĩ Ban Xuống', type: 'Sự Kiện'
  },
  {
    id: 'hoi-nghi-dien-hong',
    image: '/img/image71.jpeg',
    name: 'Hội Nghị Diên Hồng', type: 'Sự Kiện'
  },
  {
    id: 'co-lau-tap-tran',
    image: '/img/image72.jpeg',
    name: 'Cờ Lau Tập Trận', type: 'Sự Kiện'
  },

  // Mệnh Lệnh
  { id: 'hieu-co-lenh',
    image: '/img/image73.jpeg',
    name: 'Hiệu Cờ Lệnh', type: 'Mệnh Lệnh' },
  {
    id: 'dao-canh-khan',
    image: '/img/image74.jpeg',
    name: 'Đảo Cánh Khẩn', type: 'Mệnh Lệnh'
  },
  {
    id: 'tram-ky-doat-the',
    image: '/img/image75.jpeg',
    name: 'Trảm Kỳ Đoạt Thế', type: 'Mệnh Lệnh'
  },
  {
    id: 'hoi-quan-co-thu',
    image: '/img/image76.jpeg',
    name: 'Hồi Quân Cố Thủ', type: 'Mệnh Lệnh'
  },
  {
    id: 'chi-vien-tuc-thoi',
    image: '/img/image77.jpeg',
    name: 'Chi Viện Tức Thời', type: 'Mệnh Lệnh'
  },
  {
    id: 'phat-co-tong-cong',
    image: '/img/image78.jpeg',
    name: 'Phất Cờ Tổng Công', type: 'Mệnh Lệnh'
  },
];
