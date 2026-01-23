/**
 * VSunoMaker - Prompt Templates
 * Centralized Prompt Engineering Logic
 */

export const Prompts = {
    /**
     * Generates the main composition prompt for Suno
     */
    composeMusic: (params) => {
        const { concept, vibe, artist, gender, region, language, isInstrumental, isCustomLyrics, customSystemPrompt, customStructure } = params;

        const artistContext = artist ? `\n    Đặc biệt, hãy nghiên cứu sâu và mô phỏng "ADN âm nhạc" của nghệ sĩ: "${artist}". 
        - Phong cách hát (Vocal Style): Cách luyến láy, ngân rung đặc trưng.` : "";

        const genderContext = gender && gender !== 'Random' ? `\n    - Giới tính giọng hát (Vocal Gender): BẮT BUỘC phải là "${gender}".` : "";

        let regionDetailedContext = "";
        if (language === 'Vietnamese' && region && region !== 'Standard') {
            if (region === 'Northern') {
                regionDetailedContext = `\n  - Vùng miền (Micro-dialect): Giọng miền Bắc (Hà Nội). Lời bài hát cần tinh tế, sử dụng các từ ngữ trang nhã, giàu hình ảnh truyền thống nhưng hiện đại. Cách ngắt nhịp rõ ràng, phát âm chuẩn các âm tiết.`;
            } else if (region === 'Central') {
                regionDetailedContext = `\n  - Vùng miền (Micro-dialect): Giọng miền Trung. Lời bài hát cần mộc mạc, chan chứa tình cảm. BẮT BUỘC sử dụng khéo léo một số từ địa phương (VD: mô, tê, răng, rứa) để tạo âm hưởng bản địa đặc trưng nhưng vẫn dễ nghe.`;
            } else if (region === 'Southern') {
                regionDetailedContext = `\n  - Vùng miền (Micro-dialect): Giọng miền Nam. Phong cách tự nhiên, phóng khoáng, trẻ trung. Sử dụng ngôn ngữ đời thường, gần gũi (VD: thiệt, hông, xíu). Nhịp điệu bản nhạc nên sôi động hoặc Bolero trữ tình đặc trưng.`;
            }
        } else if (region && region !== 'Standard') {
            regionDetailedContext = `\n  - Vùng miền (Region/Accent): "${region} accent/style".`;
        }

        const languageContext = language ? `\n  - Ngôn ngữ (Language): BẮT BUỘC phải sử dụng "${language}".` : "";

        // --- PROMPT MODES ---
        let promptModeInstructions = "";

        let structureInstruction = "";
        if (customStructure && customStructure.length > 0) {
            structureInstruction = `
        ### YÊU CẦU CẤU TRÚC ĐẶC BIỆT (STRUCTURE):
        - Bạn BẮT BUỘC phải tuân theo cấu trúc bài hát sau đây theo đúng trình tự:
        [${customStructure}]
        - Hãy phân bổ nội dung lời bài hát sao cho phù hợp với từng phần của cấu trúc này.
            `;
        } else {
            structureInstruction = `
        - Cấu trúc chuyên nghiệp: [Intro], [Verse 1], [Pre-Chorus], [Chorus], [Verse 2], [Chorus], [Bridge - Cao trào], [Outro].
            `;
        }

        if (isInstrumental) {
            promptModeInstructions = `
        ### CHẾ ĐỘ: INSTRUMENTAL (KHÔNG LỜI)
        - Người dùng muốn tạo một bản nhạc không lời dựa trên mô tả: "${concept}".
        - Yêu cầu: KHÔNG được tạo ra bất kỳ lời bài hát nào.
        - Trường "lyrics" trong JSON phải để trống hoặc ghi "[Instrumental]".
        - Tập trung tối đa vào phần "style" để diễn tả đúng không khí (Atmosphere) và nhạc cụ.
            `;
        } else if (isCustomLyrics) {
            promptModeInstructions = `
        ### CHẾ ĐỘ: TÙY CHỈNH LỜI (CUSTOM LYRICS)
        - Người dùng đã cung cấp sẵn lời bài hát:
        "${concept}"
        
        - Nhiệm vụ của bạn:
        1. Phân tích lời bài hát kết hợp với phong cách chủ đạo là: "${vibe}".${genderContext}${regionDetailedContext}${languageContext}
        2. Chọn ra "style" và "title" phù hợp nhất dựa trên các thông số trên.
        3. Giữ nguyên lời bài hát gốc trong trường "lyrics". Bạn có thể thêm các thẻ [Meta Tags] như [Verse], [Chorus] vào trước các đoạn nếu chưa có, nhưng KHÔNG được thay đổi nội dung lời.
            `;
        } else {
            // Default: Creating from Concept
            promptModeInstructions = `
        ### CHẾ ĐỘ: SÁNG TÁC TỪ CONCEPT
        - Nhiệm vụ của bạn là biến ý tưởng: "${concept}" 
        - Thành một tác phẩm âm nhạc đỉnh cao với phong cách chủ đạo là: "${vibe}".${genderContext}${regionDetailedContext}${languageContext}
        
        ### YÊU CẦU VỀ LYRICS (Lời bài hát):
        - Ngôn ngữ: ${language || 'Tiếng Việt'} (hoặc Anh nếu vibe yêu cầu).
        ${structureInstruction}
        - Kỹ thuật: Sử dụng ẩn dụ, hình ảnh so sánh độc đáo, vần điệu (Rhyme scheme) chặt chẽ giữa các câu.
        - Metatags: Thêm các thẻ lệnh Suno như [Drop], [Guitar Solo], [Build-up], [Big Finish] ở các vị trí hợp lý.
            `;
        }

        // System Prompt Override or Append
        let systemPersona = `Bạn là "The Music Architect" - Một nhà sản xuất âm nhạc và nhạc sĩ lừng danh thế giới.`;
        if (customSystemPrompt) {
            systemPersona = `
        ### VAI TRÒ CỦA BẠN (ĐƯỢC NGƯỜI DÙNG CHỈ ĐỊNH):
        ${customSystemPrompt}
        (Hãy hành động đúng với vai trò trên. Nếu xung đột với vai trò mặc định, hãy ưu tiên vai trò này).
            `;
        }

        return `
    ${systemPersona}
    ${artistContext}

    ${promptModeInstructions}

    ### YÊU CẦU VỀ STYLE (Hòa âm phối khí):
    Phải bao gồm các thẻ tag nhạc lý chuyên sâu bằng tiếng Anh để Suno AI hiểu được linh hồn bài hát. CẤU TRÚC BẮT BUỘC:
    - [Sub-genre], [BPM], [Key], [Main Instruments], [Vocal Character của ${artist || 'nghệ sĩ'}], [${gender || 'Vocal Gender'}], [Atmosphere], [Studio Effects].
    - Ví dụ: Modern V-Pop, 100 BPM, C# Minor, Catchy Synth Pluck, Breathiness, Rap-singing, High-end Reverb.

    ### ĐỊNH DẠNG ĐẦU RA (JSON DUY NHẤT):
    {
      "title": "Tên bài hát đầy tính nghệ thuật",
      "style": "Chuỗi tag style chuyên sâu",
      "lyrics": "Nội dung lời bài hát (hoặc [Instrumental])"
    }

    Hãy sáng tạo một kiệt tác có khả năng gây nghiện (Viral) và chạm đến cảm xúc người nghe.
        `;
    },

    /**
     * Polish Lyrics Prompt
     */
    polishLyrics: (params) => {
        const { lyrics, vibe, artist, language, region } = params;
        return `
    Bạn là một chuyên gia ngôn ngữ và nhạc sĩ tài ba (Lyrics Polisher).
    Nhiệm vụ: Chỉnh sửa lời bài hát dựa trên TOÀN BỘ nội dung để đảm bảo tính kết nối, vần điệu (rhyme) và mạch cảm xúc (flow).

    DỰ LIỆU NGỮ CẢNH:
    - Phong cách âm nhạc (Style): "${vibe || 'Pop'}"
    - Nghệ sĩ truyền cảm hứng: "${artist || 'Không có'}"
    - Ngôn ngữ: "${language || 'Tiếng Việt'}"
    - Âm hưởng vùng miền: "${region || 'Chuẩn'}"

    YÊU CẦU PHÂN TÍCH TOÀN CẢNH:
    1. Đọc toàn bộ lời bài hát để xác định "vần chủ đạo" (Global Rhyme Theme).
    2. Phát hiện những câu bị gãy vần, lỗi nhịp hoặc không khớp với phong cách "${vibe}".
    3. Đề xuất sửa đổi linh hoạt (có thể là một câu hoặc cả một đoạn) để đạt được sự tối ưu cao nhất.

    YÊU CẦU ĐẦU RA (JSON ARRAY BẮT BUỘC):
    Bạn phải trả về một mảng JSON các đối tượng:
    [
      {
        "original": "Đoạn gốc (một câu hoặc cụm câu) bị lỗi/chưa hay",
        "suggested": "Đoạn đã được bạn chuốt lại hoàn chỉnh",
        "reason": "Giải thích tại sao sửa theo phong cách ${vibe}",
        "improvementScore": 85 // Điểm số cải thiện ước tính từ 1-100 dựa trên vần điệu/flow
      }
    ]

    Lời gốc của người dùng:
    """
    ${lyrics}
    """
    
    Lưu ý:
    - Nếu toàn bộ bài hát đã tốt, trả về mảng rỗng [].
    - Chỉ trả về duy nhất mảng JSON. Không có văn bản thừa.
        `;
    },

    /**
     * Fuse Styles Prompt
     */
    fuseStyles: (styleA, styleB) => {
        return `
    Nhiệm vụ: Lai tạo (Fusion) hai phong cách âm nhạc sau đây thành một Style Tag hợp lý và độc đáo cho Suno AI.
    Style 1: "${styleA}"
    Style 2: "${styleB}"
    
    Yêu cầu:
    - Tìm ra điểm chung về nhịp điệu (BPM), nhạc cụ, và không khí.
    - Kết hợp chúng thành một chuỗi tag tiếng Anh.
    - Ví dụ: Input "Quan họ" + "Trap" -> Output "Vietnamese Folk, Trap Beat, 140 BPM, Quan Ho Vocals, 808 Bass, Traditional Flute".
    - Chỉ trả về chuỗi Style Tag duy nhất.
        `;
    },

    /**
     * Clone Vibe Prompt
     */
    cloneVibe: (source) => {
        return `
    Bạn là chuyên gia phân tích âm nhạc. Hãy "dịch ngược" đoạn mô tả hoặc lời bài hát dưới đây thành cấu hình âm nhạc (Style Prompt).
    
    Nguồn:
    """
    ${source}
    """
    
    Hãy trả về JSON duy nhất:
    {
       "style": "Chuỗi style tag chi tiết (Genre, BPM, Instruments, Mood)",
       "artist": "Tên nghệ sĩ có phong cách tương tự (nếu nhận diện được, hoặc để trống)"
    }
        `;
    },

    /**
     * Generate Styles Prompt
     */
    generateStyles: (params) => {
        const { concept, language, artist, gender, region } = params;
        return `
    Bạn là một chuyên gia âm nhạc và nhà sản xuất (Studio Producer).
    Nhiệm vụ: Dựa trên các thông tin dưới đây, hãy tạo ra một chuỗi các thẻ Style (Style Tags) chuyên sâu để Suno AI có thể tạo ra bản nhạc hay nhất.

    THÔNG TIN ĐẦU VÀO:
    - Nội dung (Lời/Ý tưởng): "${concept}"
    - Ngôn ngữ dự kiến: "${language}"
    - Nghệ sĩ truyền cảm hứng: "${artist || 'Không có'}"
    - Giới tính giọng hát: "${gender || 'Ngẫu nhiên'}"
    - Âm hưởng vùng miền: "${region || 'Mặc định'}"

    YÊU CẦU VỀ STYLE TAGS:
    1. Phải bao gồm: [Sub-genre], [BPM], [Key], [Main Instruments], [Atmosphere], [Production Style].
    2. Các thẻ tag phải bằng tiếng Anh.
    3. Nếu nghệ sĩ được nhắc đến, hãy trích xuất đặc trưng âm nhạc của họ (VD: "Sơn Tùng M-TP" -> "Modern V-Pop, Melodic Rap, Synth-heavy").
    4. Chỉ trả về duy nhất chuỗi thẻ tag, cách nhau bởi dấu phẩy. Không giải thích gì thêm.
    
    Ví dụ: Modern V-Pop, 105 BPM, G Major, Clean Electric Guitar, Atmospheric Pads, Emotional Male Vocals, High-end Reverb.
        `;
    },

    /**
     * Regenerate Review Item Prompt
     */
    regenerateReviewItem: (params) => {
        const { original, currentSuggested, vibe, artist, language, region } = params;
        return `
    Bạn là một chuyên gia ngôn ngữ và nhạc sĩ tài ba (Lyrics Polisher).
    Nhiệm vụ: Hãy tạo ra một PHƯƠNG ÁN KHÁC (Alternative) cho đoạn lời bài hát sau.

    NGỮ CẢNH:
    - Phong cách âm nhạc: "${vibe}"
    - Nghệ sĩ: "${artist}"
    - Ngôn ngữ: "${language}"
    - Vùng miền: "${region}"

    DỮ LIỆU HIỆN TẠI:
    - Đoạn gốc: "${original}"
    - Đã đề xuất trước đó: "${currentSuggested}"

    YÊU CẦU:
    1. Tạo ra một đề xuất MỚI hoàn toàn, không lặp lại cái cũ nhưng vẫn giữ đúng tinh thần và vần điệu.
    2. Nếu là ${vibe}, hãy tập trung vào các đặc trưng vần điệu của thể loại này.
    3. Trả về duy nhất đối tượng JSON:
    {
      "original": "${original}",
      "suggested": "Đề xuất mới của bạn",
      "reason": "Tại sao phương án này cũng hay hoặc khác biệt thế nào",
      "improvementScore": 90
    }
        `;
    }
};
