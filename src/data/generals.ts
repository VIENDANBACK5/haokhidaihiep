export interface General {
  id: string;
  name: string;
  type: 'Bộ Binh' | 'Kỵ Binh' | 'Thủy Binh' | 'Tượng Binh';
  dynasty: string;
  title: string;
  image: string;
  tags: string[];
  voice: string;
  skills: Array<{ name: string; desc: string; icon: string }>;
  quote: string;
  biography: string;
}

export const generals: General[] = [
  {
    id: 'ly-thuong-kiet',
    name: 'Lý Thường Kiệt',
    type: 'Bộ Binh',
    dynasty: 'NHÀ LÝ',
    title: 'T01 - PHẢN CÔNG',
    image: '/img/ly thuong kiet.jpg',
    tags: ['GIỮ TUYẾN', 'PHẢN ĐÒN', 'TÍCH UY DANH'],
    voice: 'Puck',
    skills: [
      { name: 'Hiệu ứng xuất trận', desc: 'Khi xuất trận, 1 Bộ binh phe bạn nhận +1 TH đến hết lượt.', icon: 'shield' },
      { name: 'Nội tại', desc: 'Mỗi lượt, lần đầu Bộ binh phe bạn sống sót sau giao chiến: nhận 1 Uy danh.', icon: 'military_tech' }
    ],
    quote: 'Nam quốc sơn hà Nam đế cư, Tiệt nhiên định phận tại thiên thư. Như hà nghịch lỗ lai xâm phạm, Nhữ đẳng hành khan thủ bại hư.',
    biography: 'Với tư duy quân sự thiên tài, ông chủ trương "ngồi yên đợi giặc không bằng đem quân đánh trước để bẻ gãy mũi nhọn của giặc" (Tiên phát chế nhân). Khi chặn đứng quân Tống tại phòng tuyến sông Như Nguyệt, để khích lệ tinh thần quân sĩ đang mệt mỏi, ông đã cho người đêm tối vào đền thờ Trương Hống, Trương Hát đọc vang bài thơ "Nam quốc sơn hà". Quân sĩ nghe tiếng thơ rền vang như lời của thần linh, khí thế tăng vọt, lập tức tổng tấn công quét sạch quân thù.'
  },
  {
    id: 'tran-quoc-toan',
    name: 'Trần Quốc Toản',
    type: 'Bộ Binh',
    dynasty: 'NHÀ TRẦN',
    title: 'T02 - SĨ KHÍ XUNG TRẬN',
    image: '/img/tran quoc toan.jpg',
    tags: ['ĐẨY NHỊP SỚM', 'ĐÔNG QUÂN'],
    voice: 'Puck',
    skills: [
      { name: 'Hiệu ứng xuất trận', desc: 'Khi xuất trận, được triển khai miễn phí 1 Bộ binh chi phí 1 từ tay.', icon: 'group_add' },
      { name: 'Nội tại', desc: 'Bộ binh đầu tiên tấn công trong lượt của bạn được +1 CT.', icon: 'swords' }
    ],
    quote: 'Phá cường địch, báo hoàng ân.',
    biography: 'Khi quân Nguyên chuẩn bị xâm lược lần hai, vua Trần họp bàn ban mưu kế tại bến Bình Than. Vì còn quá nhỏ tuổi (16 tuổi), Trần Quốc Toản không được vào dự họp. Cậu vừa hổ thẹn, vừa tức giận quân giặc đến nỗi tay siết chặt lại, bóp nát quả cam được vua ban lúc nào không hay. Sau đó, cậu lui về, tự gom góp gia nô, đóng chiến thuyền và thêu lá cờ lớn sáu chữ: "Phá cường địch, báo hoàng ân" xông pha trận mạc.'
  },
  {
    id: 'dinh-bo-linh',
    name: 'Đinh Bộ Lĩnh',
    type: 'Bộ Binh',
    dynasty: 'NHÀ ĐINH',
    title: 'T03 - ỔN ĐỊNH ĐỘI HÌNH',
    image: '/img/dinh bo linh.jpg',
    tags: ['ĐÁNH LÌ', 'HỒI TÀI NGUYÊN', 'ĐƯỜNG DÀI'],
    voice: 'Zephyr',
    skills: [
      { name: 'Hiệu ứng xuất trận', desc: 'Khi xuất trận, hồi 1 Hào khí và lấy 1 Bộ binh từ Mộ bài về tay.', icon: 'recycling' },
      { name: 'Nội tại', desc: 'Lần đầu mỗi lượt bạn triển khai lá Bộ binh thứ hai, lá đó nhận +1 TH.', icon: 'security' }
    ],
    quote: 'Đại Cồ Việt ta nay đã độc lập, xưng đế một phương, há phải chịu luồn cúi kẻ khác!',
    biography: 'Thuở nhỏ, Đinh Bộ Lĩnh đi chăn trâu cho người chú. Ông thường cùng lũ trẻ trong vùng lấy hoa lau làm cờ, bày trận đánh nhau. Nhờ mưu trí, ông được đám trẻ tôn làm "vua", chắp tay làm kiệu rước đi. Có lần người chú tức giận vác dao đuổi đánh, Đinh Bộ Lĩnh chạy đến bến sông, bỗng có hai con rồng vàng hiện lên đưa ông qua sông, khiến người chú sợ hãi sụp lạy. Sau này ông dẹp loạn 12 sứ quân, lập ra nhà Đinh.'
  },
  {
    id: 'nguyen-tri-phuong',
    name: 'Nguyễn Tri Phương',
    type: 'Bộ Binh',
    dynasty: 'NHÀ NGUYỄN',
    title: 'T04 - THỦ TRẬN TRUNG QUÂN',
    image: '/img/nguyen tri phuong.jpg',
    tags: ['THỦ BÀN GIỮA', 'GIỮ ĐỘI HÌNH'],
    voice: 'Charon',
    skills: [
      { name: 'Hiệu ứng xuất trận', desc: 'Chọn 1 làn. Quân địch ở làn đó bị -1 CT đến hết lượt.', icon: 'trending_down' },
      { name: 'Nội tại', desc: 'Bộ binh của bạn ở làn giữa nhận +1 TH.', icon: 'fort' }
    ],
    quote: 'Thành mất thì chết theo thành, đó là đạo lý của kẻ làm tướng.',
    biography: 'Khi thực dân Pháp nổ súng tấn công thành Hà Nội lần thứ nhất (1873), dù tuổi đã cao (73 tuổi), Nguyễn Tri Phương vẫn tự mình ra chiến lũy đốc chiến. Con trai ông là Nguyễn Lâm trúng đạn hy sinh, bản thân ông cũng bị thương nặng ở bụng và bị giặc Pháp bắt giữ. Người Pháp rất khâm phục tài năng của ông nên ra sức cứu chữa, dâng đồ ăn ngon nhằm mua chuộc. Ông đã khảng khái gạt đi và nói: "Bây giờ nếu ta chỉ dật dờ dại dột mà sống, sao bằng thong dong chết về nơi chính trực". Sau đó ông tuyệt thực gần một tháng rồi qua đời trong sự kính trọng của nhân dân.'
  },
  {
    id: 'quang-trung',
    name: 'Quang Trung',
    type: 'Kỵ Binh',
    dynasty: 'NHÀ TÂY SƠN',
    title: 'T05 - ĐỘT PHÁ',
    image: '/img/quang trung.jpg',
    tags: ['ĐÁNH NHANH', 'KẾT VÁN GỌN'],
    voice: 'Fenrir',
    skills: [
      { name: 'Hiệu ứng xuất trận', desc: 'Khi xuất trận, 1 Kỵ binh phe bạn được phép tấn công ngay trong lượt này.', icon: 'bolt' },
      { name: 'Nội tại', desc: 'Kỵ binh của bạn công phá trực diện gây thêm +1 sát thương.', icon: 'local_fire_department' }
    ],
    quote: 'Đánh cho để dài tóc, đánh cho để đen răng, đánh cho nó chích luân bất phản, đánh cho nó phiến giáp bất hoàn, đánh cho sử tri Nam quốc anh hùng chi hữu chủ.',
    biography: 'Tết Kỷ Dậu 1789, 29 vạn quân Thanh xâm lược nước ta. Từ Huế, Nguyễn Huệ lên ngôi hoàng đế (Quang Trung) rồi lập tức chỉnh đốn quân đội ra Bắc. Ông dùng chiến thuật hành quân thần tốc: Cứ hai người khênh một người nằm võng nghỉ ngơi, thay phiên nhau đi liên tục không nghỉ ngày đêm. Khi đánh đồn Ngọc Hồi, ông cho quân ghép những tấm ván lớn bên ngoài quấn rơm dấp nước để chống đạn súng hỏa mai của giặc, mở đường cho kỵ binh và tượng binh xông vào tiêu diệt sạch quân Thanh trước sự ngỡ ngàng của chúng.'
  },
  {
    id: 'pham-ngu-lao',
    name: 'Phạm Ngũ Lão',
    type: 'Kỵ Binh',
    dynasty: 'NHÀ TRẦN',
    title: 'T06 - TRUY KÍCH',
    image: '/img/Pham ngu lao.jpg',
    tags: ['ÁP LỰC NHIỀU LÀN', 'BÓP ĐIỂM HỞ'],
    voice: 'Fenrir',
    skills: [
      { name: 'Hiệu ứng xuất trận', desc: 'Khi xuất trận, di chuyển 1 Kỵ binh phe bạn sang làn khác.', icon: 'swap_horiz' },
      { name: 'Nội tại', desc: 'Sau khi hạ địch, 1 Kỵ binh phe bạn được đổi làn 1 lần.', icon: 'directions_run' }
    ],
    quote: 'Múa giáo non sông trải mấy thu, Ba quân khí mạnh át sao Ngưu. Công danh duyên nợ vẫn vương vấn, Luống thẹn tai nghe chuyện Vũ hầu.',
    biography: 'Thuở còn là một thanh niên nghèo ở làng Phù Ủng, Phạm Ngũ Lão ngồi bên vệ đường đan sọt mà đầu óc mải mê suy nghĩ về binh pháp và vận nước. Đúng lúc đó, kiệu của Hưng Đạo Vương đi qua, quân lính mở đường lấy giáo đâm vào đùi ông chảy máu để đuổi đi nhưng ông vẫn ngồi im phăng phắc, không hề hay biết. Trần Hưng Đạo thấy lạ bèn dừng kiệu hỏi chuyện, nhận ra đây là một bậc kỳ tài nên đã thu nạp, sau này còn gả con gái nuôi cho ông.'
  },
  {
    id: 'le-loi',
    name: 'Lê Lợi',
    type: 'Kỵ Binh',
    dynasty: 'NHÀ HẬU LÊ',
    title: 'T07 - CHI VIỆN KỴ QUÂN',
    image: '/img/le loi.jpg',
    tags: ['LỌC TAY', 'GIỮ NHỊP MID GAME'],
    voice: 'Zephyr',
    skills: [
      { name: 'Hiệu ứng xuất trận', desc: 'Khi xuất trận, lá Kỵ binh đầu tiên bạn chơi trong lượt này giảm 1 Chi phí.', icon: 'savings' },
      { name: 'Nội tại', desc: 'Mỗi lượt, lần đầu bạn triển khai Kỵ binh: rút 1 rồi bỏ 1.', icon: 'find_replace' }
    ],
    quote: 'Ta đây: Núi Lam Sơn dấy nghĩa, Chốn hoang dã nương mình. Ngẫm thù lớn há đội trời chung, Căm giặc nước thề không cùng sống.',
    biography: 'Để chống lại ách đô hộ của nhà Minh, Lê Lợi phất cờ khởi nghĩa Lam Sơn. Những năm đầu, nghĩa quân gặp vô vàn khó khăn, có lúc phải ăn củ mài, rau rừng qua ngày ("nếm mật nằm gai"). Ông được Long Quân cho mượn gươm thần để đánh đuổi giặc Minh. Sau khi kháng chiến thành công, lên ngôi vua, trong một lần dạo chơi trên hồ Tả Vọng, Rùa Vàng đã hiện lên đòi lại gươm. Vua trả gươm, từ đó hồ có tên là Hồ Hoàn Kiếm.'
  },
  {
    id: 'le-lai',
    name: 'Lê Lai',
    type: 'Kỵ Binh',
    dynasty: 'NHÀ HẬU LÊ',
    title: 'T08 - ĐÁNH CHỚP NHOÁNG',
    image: '/img/le lai.jpg',
    tags: ['CƠ ĐỘNG', 'TẠO GÓC ĐÁNH BẤT NGỜ'],
    voice: 'Charon',
    skills: [
      { name: 'Hiệu ứng xuất trận', desc: 'Chọn 1 Kỵ binh phe bạn. Lá đó được +1 CT đến hết lượt.', icon: 'keyboard_double_arrow_up' },
      { name: 'Nội tại', desc: 'Kỵ binh phe bạn khi đổi làn nhận +1 TH đến hết lượt.', icon: 'shield' }
    ],
    quote: 'Chúa công hãy thay áo cho thần, thần nguyện chết thay chúa công để cứu lấy đại cục!',
    biography: 'Trong một trận chiến sinh tử tại núi Chí Linh, nghĩa quân Lam Sơn bị quân Minh bao vây chặt chẽ, lương thực cạn kiệt, tính mạng Lê Lợi ngàn cân treo sợi tóc. Trước tình thế nguy cấp, Lê Lai đã tình nguyện đóng giả làm Lê Lợi. Ông mặc áo hoàng bào, cưỡi voi chiến, dẫn một toán quân liều chết xông thẳng vào vòng vây giặc. Quân Minh tưởng đó là vua Lê nên dồn toàn lực bắt giết. Lê Lai hy sinh anh dũng, nhờ sự hy sinh đó, Lê Lợi và bộ chỉ huy nghĩa quân mới có cơ hội phá vây rút lui an toàn để làm nên đại nghiệp sau này.'
  },
  {
    id: 'ngo-quyen',
    name: 'Ngô Quyền',
    type: 'Thủy Binh',
    dynasty: 'NHÀ NGÔ',
    title: 'T09 - BẪY PHẢN CÔNG',
    image: '/img/ngo quen.jpg',
    tags: ['PHẢN ĐÒN', 'CÀI THẾ', 'HỢP BẪY'],
    voice: 'Charon',
    skills: [
      { name: 'Hiệu ứng xuất trận', desc: 'Khi xuất trận, được đặt miễn phí 1 Bẫy từ tay xuống HT.', icon: 'grid_view' },
      { name: 'Nội tại', desc: 'Mỗi lượt, lần đầu Bẫy hoặc Thủy binh phe bạn hạ địch: nhận 1 Uy danh.', icon: 'military_tech' }
    ],
    quote: 'Hoằng Tháo là đứa trẻ dại, đem quân từ xa đến mỏi mệt... Ta lấy quân mới rảnh rang đợi quân mỏi mệt, tất phá được.',
    biography: 'Ngô Quyền là nhà quân sự tài ba, ông chủ yếu nổi tiếng với kế sách phòng thủ thông minh. Khi bị tấn công, Ngô Quyền thường dùng những bẫy tinh vi kết hợp với quân thủy chiến để tạo thế bất lợi cho quân địch. Sự hiểu biết sâu sắc về địa hình sông nước và khí tượng đã giúp ông có nhiều chiến thắng liên tiếp, bảo vệ giang sơn Đại Việt khỏi các cuộc xâm lược từ phía Bắc.'
  },
  {
    id: 'tran-hung-dao',
    name: 'Trần Hưng Đạo',
    type: 'Thủy Binh',
    dynasty: 'NHÀ TRẦN',
    title: 'T10 - ĐIỀU QUÂN THỦY TRẬN',
    image: '/img/tran hung dao.jpg',
    tags: ['ĐÁNH LINH HOẠT', 'GIỮ NHỊP CHẮC'],
    voice: 'Zephyr',
    skills: [
      { name: 'Hiệu ứng xuất trận', desc: 'Khi xuất trận, 1 Thủy binh phe bạn được +1 CT và đổi làn 1 lần.', icon: 'sailing' },
      { name: 'Nội tại', desc: 'Thủy binh đầu tiên của bạn mỗi lượt có thể đổi làn trước giao chiến.', icon: 'waves' }
    ],
    quote: 'Ta thường tới bữa quên ăn, nửa đêm vỗ gối, ruột đau như cắt, nước mắt đầm đìa... Chỉ căm tức chưa xả thịt lột da, nuốt gan uống máu quân thù.',
    biography: 'Cha của ông có mối thù sâu sắc với nhà vua (Trần Thái Tông). Trước khi chết, cha ông dặn phải cướp ngôi. Nhưng Trần Hưng Đạo đặt giang sơn lên trên hết. Để xóa bỏ hiềm khích với người em họ là Thái sư Trần Quang Khải, ông đã chủ động mời Trần Quang Khải lên thuyền của mình, tự tay nấu nước thơm và tắm gội cho em. Sự hòa hợp của hai người đứng đầu đã tạo nên sức mạnh "vua tôi đồng lòng" đánh bại quân Nguyên Mông. Khi vua Trần lo lắng hỏi có nên hàng không, ông khẳng định: "Nếu bệ hạ muốn hàng, xin hãy chém đầu thần trước đã".'
  },
  {
    id: 'yet-kieu',
    name: 'Yết Kiêu',
    type: 'Thủy Binh',
    dynasty: 'NHÀ TRẦN',
    title: 'T11 - ĐỘT KÍCH HẬU TUYẾN',
    image: '/img/yet kieu.jpg',
    tags: ['PHÁ HỖ TRỢ', 'CẮT HẬU PHƯƠNG'],
    voice: 'Charon',
    skills: [
      { name: 'Hiệu ứng xuất trận', desc: 'Khi xuất trận, chọn 1 quân HT của đối thủ, trả lá đó về tay chủ sở hữu.', icon: 'undo' },
      { name: 'Nội tại', desc: 'Nếu trước mặt trống, 1 Thủy binh phe bạn có thể tấn công vào HT đối diện thay vì công phá trực diện.', icon: 'my_location' }
    ],
    quote: 'Tôi tuy tài hèn sức mọn, nhưng cũng nguyện đem thân mình đền nợ nước. Quân Nguyên Mông dù mạnh đến đâu, tôi cũng sẽ đục thủng thuyền chúng cho chúng làm mồi cho cá.',
    biography: 'Là gia nô thân tín của Trần Hưng Đạo, Yết Kiêu nổi tiếng với biệt tài bơi lặn. Ông có thể lặn dưới nước suốt một ngày đêm mà không cần ngoi lên. Trong cuộc chiến chống quân Nguyên, cứ đêm đến, ông lại lặn xuống đáy sông, dùng dùi sắt đục thủng thuyền chiến của giặc khiến chúng chìm nghỉm trong im lặng. Khi bị giặc bắt và tra hỏi nước Nam có bao nhiêu người lặn được như ông, ông kiêu hãnh đáp: "Nước Nam có hàng vạn người như tôi, tôi chỉ là kẻ tài hèn nhất", sau đó thừa cơ sơ hở liền nhảy xuống nước trốn thoát.'
  },
  {
    id: 'tran-khanh-du',
    name: 'Trần Khánh Dư',
    type: 'Thủy Binh',
    dynasty: 'NHÀ TRẦN',
    title: 'T12 - CẮT HẬU CẦN',
    image: '/img/tran khanh du.jpg',
    tags: ['BÓP TAY', 'ÉP NHỊP', 'KHÓ CHỊU'],
    voice: 'Puck',
    skills: [
      { name: 'Hiệu ứng xuất trận', desc: 'Nếu bạn đang có Thủy binh trên sân, đối thủ bỏ ngẫu nhiên 1 lá.', icon: 'delete_sweep' },
      { name: 'Nội tại', desc: 'Khi Thủy binh phe bạn hạ địch, đối thủ không thể đặt Bẫy trong lượt kế tiếp của họ.', icon: 'block' }
    ],
    quote: 'Tướng là chim ưng, dân lính là vịt, dùng vịt để nuôi chim ưng thì có gì là lạ?',
    biography: 'Trần Khánh Dư là người có tài quân sự nhưng tính tình phóng túng, từng bị bãi chức, tịch thu tài sản vì phạm tội. Ông bỏ về vùng Chí Linh làm nghề bán than để sinh sống. Khi vận nước lâm nguy (quân Nguyên xâm lược lần 3), vua Trần Nhân Tông họp hội nghị Bình Than, tình cờ nhìn thấy một thuyền bán than đi qua, người chèo thuyền đội nón lá, mặc áo ngắn chính là Trần Khánh Dư. Vua lập tức triệu ông lên, phục chức tướng quân. Chính ông sau đó đã lập công lớn tại trận Vân Đồn, đánh tan đoàn thuyền lương của Trương Văn Hổ, bẻ gãy xương sống của quân Nguyên.'
  },
  {
    id: 'bui-thi-xuan',
    name: 'Bùi Thị Xuân',
    type: 'Tượng Binh',
    dynasty: 'NHÀ TÂY SƠN',
    title: 'T13 - CÔNG PHÁ',
    image: '/img/bui thi xuan.jpg',
    tags: ['CHUYÊN PHÁ TUYẾN', 'CHỐT ĐIỂM'],
    voice: 'Kore',
    skills: [
      { name: 'Hiệu ứng xuất trận', desc: 'Khi xuất trận, 1 Tượng binh phe bạn nhận +1 CT đến hết lượt.', icon: 'swords' },
      { name: 'Nội tại', desc: 'Tượng binh phe bạn công phá trực diện gây thêm +1 sát thương.', icon: 'local_fire_department' }
    ],
    quote: 'Con nhà võ, chết ở chiến trường là chuyện thường. Chỉ tiếc là chưa quét sạch được quân thù, chưa thấy được cảnh thái bình.',
    biography: 'Là một trong "Tây Sơn ngũ phụng thư", Bùi Thị Xuân nổi tiếng với tài bắn cung, đấu kiếm và đặc biệt là biệt tài thuần dưỡng voi chiến. Bà đã xây dựng một đội tượng binh dũng mãnh, là nỗi khiếp sợ của quân địch. Khi vương triều Tây Sơn sụp đổ, bà bị vua Gia Long nhà Nguyễn bắt sống và kết án tử hình bằng hình thức tàn khốc: cho voi giày. Đứng trước thềm cái chết, bà vẫn hiên ngang, khí phách không hề run sợ, khiến chính con voi chiến cũng phải chùn bước không dám dẫm lên bà.'
  },
  {
    id: 'ba-trieu',
    name: 'Bà Triệu',
    type: 'Tượng Binh',
    dynasty: 'HẬU HÁN',
    title: 'T14 - CHẤN ÁP',
    image: '/img/ba trieu.jpg',
    tags: ['ÉP GIAO TRANH CÓ LỢI'],
    voice: 'Kore',
    skills: [
      { name: 'Hiệu ứng xuất trận', desc: 'Chọn 1 quân địch TT. Lá đó bị -1 CT đến hết lượt.', icon: 'trending_down' },
      { name: 'Nội tại', desc: 'Mỗi khi bạn triển khai Tượng binh, quân địch đối diện với lá đó bị -1 CT đến hết lượt.', icon: 'warning' }
    ],
    quote: 'Ta muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ, chém cá kình ở Biển Đông, đánh đuổi quân Ngô, giành lại giang sơn, cởi ách nô lệ, chứ không chịu khom lưng làm tì thiếp cho người!',
    biography: 'Năm 248, Triệu Thị Trinh cùng anh trai khởi nghĩa chống quân Ngô. Khi có người khuyên bà nên lấy chồng, bà đã để lại một tuyên ngôn bất hủ: "Tôi muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ, chém cá kình ở biển Đông, giành lại giang sơn, cởi ách nô lệ, chứ không thèm bắt chước người đời cúi đầu khom lưng làm tì thiếp người ta!". Khi ra trận, bà thường mặc áo giáp vàng, đi guốc ngà, cài trâm vàng, cưỡi voi trắng một ngà vô cùng uy dũng làm quân giặc khiếp đảm.'
  },
  {
    id: 'le-hoan',
    name: 'Lê Hoàn',
    type: 'Tượng Binh',
    dynasty: 'TIỀN LÊ',
    title: 'T15 - DỒN ĐỘI HÌNH',
    image: '/img/le hoan.jpg',
    tags: ['GIỮ ÁP LỰC LÀN', 'RẤT KHÓ GỠ'],
    voice: 'Zephyr',
    skills: [
      { name: 'Hiệu ứng xuất trận', desc: 'Di chuyển 1 Tượng binh phe bạn sang làn trống; nếu làn mới có địch, địch đó bị -1 TH đến hết lượt.', icon: 'compress' },
      { name: 'Nội tại', desc: 'Tượng binh đầu tiên bạn triển khai mỗi lượt nhận +1 TH.', icon: 'shield' }
    ],
    quote: 'Ta không nhận áo bào này, thì lấy ai làm chủ thiên hạ?',
    biography: 'Khi triều Đinh suy yếu, quân Tống lăm le xâm lược. Vì đại cuộc, Thái hậu Dương Vân Nga đã đưa chiếc áo long bào trao cho Thập đạo tướng quân Lê Hoàn, suy tôn ông lên ngôi vua để lãnh đạo kháng chiến. Ông cũng là vị vua đầu tiên trong lịch sử mở đầu phong tục "Cày ruộng Tịch điền" vào mùa xuân để khuyến khích nông nghiệp, đích thân xuống ruộng cày vài đường cơ bản trước sự chứng kiến của bá tánh.'
  },
  {
    id: 'da-tuong',
    name: 'Dã Tượng',
    type: 'Tượng Binh',
    dynasty: 'NHÀ TRẦN',
    title: 'T16 - HỘ TRẬN',
    image: '/img/Da tuong.png',
    tags: ['ĐÁNH BỀN', 'TRỤ TRÂU'],
    voice: 'Fenrir',
    skills: [
      { name: 'Hiệu ứng xuất trận', desc: 'Lấy 1 Tượng binh từ Mộ bài về tay.', icon: 'front_hand' },
      { name: 'Nội tại', desc: 'Nếu Tượng binh phe bạn sống sót sau giao chiến, hồi 1 Hào khí (tối đa 1 lần mỗi lượt).', icon: 'health_and_safety' }
    ],
    quote: 'Chúa công đi đâu, thần xin theo đó. Dù phải xông pha tên mũi đạn, thần cũng không nề hà.',
    biography: 'Dã Tượng là một chỉ huy tài ba, nổi tiếng với khả năng chỉ huy các đơn vị tượng binh trong các trận chiến quy mô lớn. Với sự trung thành vô điều kiện và chiến thuật linh hoạt, Dã Tượng đã trở thành cánh tay phải của nhiều vị vua, góp phần lớn vào các chiến thắng quan trọng trong lịch sử Đại Việt.'
  }
];
