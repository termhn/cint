(function() {var implementors = {};
implementors["bytemuck"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"bytemuck/checked/enum.CheckedCastError.html\" title=\"enum bytemuck::checked::CheckedCastError\">CheckedCastError</a>","synthetic":false,"types":["bytemuck::checked::CheckedCastError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"bytemuck/enum.PodCastError.html\" title=\"enum bytemuck::PodCastError\">PodCastError</a>","synthetic":false,"types":["bytemuck::PodCastError"]}];
implementors["cint"] = [{"text":"impl&lt;ColorTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"cint/trait.ColorType.html\" title=\"trait cint::ColorType\">ColorType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.Alpha.html\" title=\"struct cint::Alpha\">Alpha</a>&lt;ColorTy&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;ColorTy::<a class=\"associatedtype\" href=\"cint/trait.ColorType.html#associatedtype.ComponentTy\" title=\"type cint::ColorType::ComponentTy\">ComponentTy</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,&nbsp;</span>","synthetic":false,"types":["cint::Alpha"]},{"text":"impl&lt;ColorTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"cint/trait.ColorType.html\" title=\"trait cint::ColorType\">ColorType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.PremultipliedAlpha.html\" title=\"struct cint::PremultipliedAlpha\">PremultipliedAlpha</a>&lt;ColorTy&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;ColorTy::<a class=\"associatedtype\" href=\"cint/trait.ColorType.html#associatedtype.ComponentTy\" title=\"type cint::ColorType::ComponentTy\">ComponentTy</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,&nbsp;</span>","synthetic":false,"types":["cint::PremultipliedAlpha"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"cint/enum.Spaces.html\" title=\"enum cint::Spaces\">Spaces</a>","synthetic":false,"types":["cint::Spaces"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.EncodedSrgb.html\" title=\"struct cint::EncodedSrgb\">EncodedSrgb</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::EncodedSrgb"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.LinearSrgb.html\" title=\"struct cint::LinearSrgb\">LinearSrgb</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::LinearSrgb"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.EncodedRec709.html\" title=\"struct cint::EncodedRec709\">EncodedRec709</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::EncodedRec709"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.Rec709.html\" title=\"struct cint::Rec709\">Rec709</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::Rec709"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.GenericColor3.html\" title=\"struct cint::GenericColor3\">GenericColor3</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::GenericColor3"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.GenericColor1.html\" title=\"struct cint::GenericColor1\">GenericColor1</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::GenericColor1"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.Luminance.html\" title=\"struct cint::Luminance\">Luminance</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::Luminance"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.Luma.html\" title=\"struct cint::Luma\">Luma</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::Luma"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.AcesCg.html\" title=\"struct cint::AcesCg\">AcesCg</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::AcesCg"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.Aces2065.html\" title=\"struct cint::Aces2065\">Aces2065</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::Aces2065"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.AcesCc.html\" title=\"struct cint::AcesCc\">AcesCc</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::AcesCc"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.AcesCct.html\" title=\"struct cint::AcesCct\">AcesCct</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::AcesCct"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.DisplayP3.html\" title=\"struct cint::DisplayP3\">DisplayP3</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::DisplayP3"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.EncodedDisplayP3.html\" title=\"struct cint::EncodedDisplayP3\">EncodedDisplayP3</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::EncodedDisplayP3"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.DciP3.html\" title=\"struct cint::DciP3\">DciP3</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::DciP3"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.DciXYZPrime.html\" title=\"struct cint::DciXYZPrime\">DciXYZPrime</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::DciXYZPrime"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.Bt2020.html\" title=\"struct cint::Bt2020\">Bt2020</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::Bt2020"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.EncodedBt2020.html\" title=\"struct cint::EncodedBt2020\">EncodedBt2020</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::EncodedBt2020"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.Bt2100.html\" title=\"struct cint::Bt2100\">Bt2100</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::Bt2100"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.EncodedBt2100PQ.html\" title=\"struct cint::EncodedBt2100PQ\">EncodedBt2100PQ</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::EncodedBt2100PQ"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.EncodedBt2100HLG.html\" title=\"struct cint::EncodedBt2100HLG\">EncodedBt2100HLG</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::EncodedBt2100HLG"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.ICtCpPQ.html\" title=\"struct cint::ICtCpPQ\">ICtCpPQ</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::ICtCpPQ"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.ICtCpHLG.html\" title=\"struct cint::ICtCpHLG\">ICtCpHLG</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::ICtCpHLG"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.CieXYZ.html\" title=\"struct cint::CieXYZ\">CieXYZ</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::CieXYZ"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.CieLab.html\" title=\"struct cint::CieLab\">CieLab</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::CieLab"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.CieLCh.html\" title=\"struct cint::CieLCh\">CieLCh</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::CieLCh"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.Oklab.html\" title=\"struct cint::Oklab\">Oklab</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::Oklab"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.Oklch.html\" title=\"struct cint::Oklch\">Oklch</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::Oklch"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.Hsl.html\" title=\"struct cint::Hsl\">Hsl</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::Hsl"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.Hsv.html\" title=\"struct cint::Hsv\">Hsv</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::Hsv"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.YCbCr.html\" title=\"struct cint::YCbCr\">YCbCr</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::YCbCr"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.YPrimeCbCr.html\" title=\"struct cint::YPrimeCbCr\">YPrimeCbCr</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::YPrimeCbCr"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.YPbPr.html\" title=\"struct cint::YPbPr\">YPbPr</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::YPbPr"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.YPrimePbPr.html\" title=\"struct cint::YPrimePbPr\">YPrimePbPr</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::YPrimePbPr"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.Yuv.html\" title=\"struct cint::Yuv\">Yuv</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::Yuv"]},{"text":"impl&lt;ComponentTy:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cint/struct.YCxCz.html\" title=\"struct cint::YCxCz\">YCxCz</a>&lt;ComponentTy&gt;","synthetic":false,"types":["cint::YCxCz"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()