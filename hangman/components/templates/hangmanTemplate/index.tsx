"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

const words = {
	charts4: [
		"Ayna",
		"Bina",
		"Baca",
		"Cami",
		"Çamur",
		"Çiçek",
		"Deve",
		"Deri",
		"Duvar",
		"Fare",
		"Fırın",
		"Halı",
		"Kapı",
		"Kase",
		"Kaya",
		"Kelep",
		"Kova",
		"Kuzu",
		"Masa",
		"Mühür",
		"Nane",
		"Oda",
		"Okul",
		"Orak",
		"Ödül",
		"Öküz",
		"Örtü",
		"Penc",
		"Pire",
		"Soba",
		"Sıra",
		"Şiir",
		"Tren",
		"Uçak",
		"Unlu",
		"Uzay",
		"Vazo",
		"Yara",
		"Yazı",
		"Zeka",
		"Sayı",
		"Ağaç",
		"Arpa",
		"Asit",
		"Baca",
		"Bant",
		"Bile",
		"Boğaz",
		"Boyn",
		"Ceza",
		"Cilt",
		"Çene",
		"Çiçek",
		"Çivi",
	],
	charts5: [
		"Ampul",
		"Badem",
		"Basın",
		"Biber",
		"Bulut",
		"Burun",
		"Buzdol",
		"Ceviz",
		"Cüzdan",
		"Çanta",
		"Çekiç",
		"Çilek",
		"Defter",
		"Dolap",
		"Dünya",
		"Faraş",
		"Fırça",
		"Gazoz",
		"Helva",
		"Hurma",
		"Hırka",
		"İncir",
		"Irmak",
		"Kalem",
		"Kavun",
		"Kemer",
		"Kepçe",
		"Kitap",
		"Köprü",
		"Lamba",
		"Maymun",
		"Müdür",
		"Oksijen",
		"Palto",
		"Papak",
		"Radyo",
		"Salça",
		"Saman",
		"Sehpa",
		"Sepet",
		"Silgi",
		"Simit",
		"Sıfat",
		"Şapka",
		"Tabak",
		"Tahta",
		"Tepsi",
		"Tünel",
		"Üzüm",
		"Yüzük",
		"Yazma",
		"Yaprak",
		"Vatan",
		"Toprak",
		"Tuzak",
		"Takım",
		"Sınav",
		"Sigorta",
		"Sermaye",
		"Ruh",
		"Reçel",
		"Pazar",
		"Müze",
		"Misket",
		"Merak",
		"Makas",
		"Mağaza",
		"Lastik",
		"Kurban",
		"Kule",
		"Koyun",
		"Komşu",
		"Konut",
		"Kontey",
		"Kumaş",
		"Kıta",
		"Kilit",
		"Kızak",
		"Kuş",
		"İhale",
		"His",
		"Hile",
		"Harf",
		"Gömlek",
		"Gözde",
		"Güneş",
		"Grup",
		"Fikir",
		"Fidan",
		"Eşya",
		"Eşek",
		"Engel",
		"Deniz",
		"Daire",
		"Çevre",
		"Çocuk",
		"Cadde",
		"Beyin",
		"Bilek",
		"Bitki",
	],
	charts6: [
		"Akbaba",
		"Atmaca",
		"Balina",
		"Bardak",
		"Bıçak",
		"Bülbül",
		"Cımbız",
		"Demlik",
		"Elbise",
		"Eşofman",
		"Fındık",
		"Fıstık",
		"Gömlek",
		"Gözlük",
		"Halhal",
		"Hünnap",
		"Kaplan",
		"Karpuz",
		"Kartal",
		"Kazak",
		"Kıyma",
		"Koltuk",
		"Kraker",
		"Kuzgun",
		"Lahana",
		"Leylek",
		"Mantar",
		"Maymun",
		"Mezgit",
		"Pancur",
		"Pardösü",
		"Parfüm",
		"Peynir",
		"Pijama",
		"Pirana",
		"Pırasa",
		"Rezene",
		"Sandık",
		"Sütlaç",
		"Sürahi",
		"Timsah",
		"Terlik",
		"Toygar",
		"Yarasa",
		"Yastık",
		"Yorgan",
		"Zeytin",
		"Sandal",
		"Rehber",
		"Rulman",
		"Perde",
		"Pirinç",
		"Portre",
		"Patika",
		"Oksijen",
		"Nüfus",
		"Misafir",
		"Miskal",
		"Milyar",
		"Masaüstü",
		"Merkez",
		"Manken",
		"Makine",
		"Liman",
		"Kolye",
		"Kolon",
		"Kilise",
		"Kravat",
		"Kişisel",
		"Kıyafet",
		"Kışlık",
		"Köy",
		"Kayısı",
		"Karyer",
		"Karın",
		"Kalkan",
		"Kabuk",
		"Japon",
		"İlan",
		"Hasar",
		"Hayvan",
		"Hazine",
		"Hastalık",
		"Hafıza",
		"Güreş",
		"Gereç",
		"Gelecek",
		"Fırtına",
		"Fidan",
		"Film",
		"Fasulye",
		"Esnaf",
		"Eroin",
		"Duman",
		"Doruk",
		"Dilim",
		"Çukur",
		"Ceket",
		"Bilet",
		"Bahçe",
	],
	charts7: [
		"Avokado",
		"Balaban",
		"Bağlama",
		"Bakteri",
		"Börülce",
		"Domates",
		"Darbuka",
		"Dereotu",
		"Firkete",
		"Işıldak",
		"Ispanak",
		"Karınca",
		"Karyola",
		"Kereviz",
		"Klarnet",
		"Kukumav",
		"Makarna",
		"Mengene",
		"Mobilya",
		"Muşmula",
		"Okarina",
		"Papağan",
		"Patates",
		"Pelikan",
		"Penguen",
		"Serenat",
		"Şeftali",
		"Telefon",
		"Tencere",
		"Testere",
		"Trombon",
		"Trompet",
		"Örümcek",
		"Kızkuşu",
		"Kitaplık",
		"Masaüstü",
		"Merdiven",
		"Kulaklık",
		"Kerpeten",
		"Sandalye",
		"Ayakkabı",
		"Kalemlik",
		"Soba",
		"Kamera",
		"Zımpara",
		"Yürek",
		"Yönetici",
		"Yapı",
		"Vagon",
		"Turist",
		"Travma",
		"Tesisat",
		"Tekerlek",
		"Taşeron",
		"Tasarım",
		"Şömine",
		"Şikayet",
		"Sporcu",
		"Sırtlık",
		"Sistem",
		"Sincap",
		"Sergi",
		"Ressam",
		"Profesör",
		"Puset",
		"Polis",
		"Paspas",
		"Pansiyon",
		"Paratoner",
		"Pencere",
		"Nezaket",
		"Müsabaka",
		"Mum",
		"Müdür",
		"Muhasebe",
		"Mekan",
		"Mektup",
		"Kuyruk",
		"Kutu",
		"Kurşun",
		"Kriz",
		"Köpek",
		"Koruma",
		"Konteynır",
		"Kombine",
		"Koku",
		"Koleksiyon",
		"Kemer",
		"Kalite",
		"İnşaat",
	],
};

const normalize = (s: string) =>
	s.toLocaleLowerCase("tr").replaceAll(" ", "").replaceAll("-", "");

function HangmanFigure({ wrongs }: { wrongs: number }) {
	const stroke = "#333";
	const common = {
		stroke,
		strokeWidth: 8,
		strokeLinecap: "round",
		fill: "none",
	} as const;
	return (
		<svg viewBox="0 0 500 500" style={{ width: "100%", height: 300 }}>
			{wrongs >= 1 && <line x1="60" y1="470" x2="200" y2="470" {...common} />}
			{wrongs >= 2 && <line x1="130" y1="460" x2="130" y2="60" {...common} />}
			{wrongs >= 3 && <line x1="130" y1="60" x2="380" y2="60" {...common} />}
			{wrongs >= 4 && <line x1="130" y1="110" x2="175" y2="60" {...common} />}
			{wrongs >= 5 && <line x1="380" y1="60" x2="380" y2="130" {...common} />}
			{wrongs >= 6 && <circle cx="380" cy="165" r="35" {...common} />}
			{wrongs >= 7 && <line x1="380" y1="200" x2="380" y2="300" {...common} />}
			{wrongs >= 8 && <line x1="380" y1="230" x2="330" y2="265" {...common} />}
			{wrongs >= 9 && <line x1="380" y1="230" x2="430" y2="265" {...common} />}
			{wrongs >= 10 && <line x1="380" y1="300" x2="345" y2="360" {...common} />}
			{wrongs >= 11 && <line x1="380" y1="300" x2="415" y2="360" {...common} />}
		</svg>
	);
}

export default function WordHangman() {
	const [level, setLevel] = useState(4);
	const [current, setCurrent] = useState("");
	const [guessed, setGuessed] = useState<string[]>([]);
	const [wrongs, setWrongs] = useState(0);
	const [seconds, setSeconds] = useState(60);
	const [message, setMessage] = useState("");

	const intervalRef = useRef<number | null>(null);

	const ALPHABET = [
		"A",
		"B",
		"C",
		"Ç",
		"D",
		"E",
		"F",
		"G",
		"Ğ",
		"H",
		"I",
		"İ",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"Ö",
		"P",
		"R",
		"S",
		"Ş",
		"T",
		"U",
		"Ü",
		"V",
		"Y",
		"Z",
	];
	const WRONG_LIMIT = 11;

	const pickPool = (len: number) => {
		const src =
			len === 4
				? words.charts4
				: len === 5
				? words.charts5
				: len === 6
				? words.charts6
				: words.charts7;
		const filtered = src.filter((w) => normalize(w).length === len);
		return filtered.length ? filtered : src;
	};

	const startRound = (len: number) => {
		const pool = pickPool(len);
		const next = pool[Math.floor(Math.random() * pool.length)];
		setLevel(len);
		setCurrent(next);
		setGuessed([]);
		setWrongs(0);
		setSeconds(60);
		setMessage("");
	};

	useEffect(() => {
		startRound(4);
		return () => {
			if (intervalRef.current) window.clearInterval(intervalRef.current);
		};
	}, []);

	useEffect(() => {
		if (!current) return;
		if (intervalRef.current) window.clearInterval(intervalRef.current);

		intervalRef.current = window.setInterval(() => {
			setSeconds((s) => {
				if (s <= 1) {
					if (intervalRef.current) window.clearInterval(intervalRef.current);
					setMessage("⏰ Süre doldu! Aynı seviyeden tekrar başlayın.");
					startRound(level);
					return 60;
				}
				return s - 1;
			});
		}, 1000);

		return () => {
			if (intervalRef.current) window.clearInterval(intervalRef.current);
		};
	}, [current, level]);

	const masked = useMemo(() => {
		const n = normalize(current);
		return n
			.split("")
			.map((ch) => (guessed.includes(ch) ? ch : "_"))
			.join(" ");
	}, [current, guessed]);

	const onLetter = (L: string) => {
		if (!current) return;
		const letter = normalize(L);
		if (guessed.includes(letter)) return;

		const nword = normalize(current);
		const nextGuessed = [...guessed, letter];
		setGuessed(nextGuessed);

		if (nword.includes(letter)) {
			const allOpen = nword.split("").every((ch) => nextGuessed.includes(ch));
			if (allOpen) {
				if (intervalRef.current) window.clearInterval(intervalRef.current);
				if (level < 7) {
					setMessage("✅ Doğru! Bir üst seviyeye geçiliyor.");
					startRound(level + 1);
				} else {
					setMessage(
						"🏆 Tebrikler kazandınız! Oyun 4 harften yeniden başlıyor."
					);
					startRound(4);
				}
			}
		} else {
			const w = wrongs + 1;
			setWrongs(w);
			if (w >= WRONG_LIMIT) {
				if (intervalRef.current) window.clearInterval(intervalRef.current);
				setMessage(
					"😢 Adam asıldı. Yandınız! Aynı seviyeden tekrar başlayacak..."
				);

				window.setTimeout(() => {
					startRound(level);
				}, 1500);
			}
		}
	};

	const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
	const ss = String(seconds % 60).padStart(2, "0");

	return (
		<div
			style={{
				fontFamily: "system-ui, -apple-system, Segoe UI, Roboto",
				padding: 16,
				maxWidth: 620,
				margin: "0 auto",
			}}>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					marginBottom: 8,
				}}>
				<h3 style={{ margin: 0 }}>Seviye: {level} harf</h3>
				<div style={{ fontWeight: 700 }}>
					{mm}:{ss}
				</div>
			</div>

			<HangmanFigure wrongs={wrongs} />

			<div
				style={{
					minHeight: 28,
					margin: "8px 0",
					fontWeight: 600,
					color: "#333",
				}}>
				{message}
			</div>

			<div style={{ margin: "12px 0", fontSize: 22, letterSpacing: 2 }}>
				<b>Kelime:</b> <span style={{ marginLeft: 8 }}>{masked}</span>
			</div>

			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(10, 1fr)",
					gap: 6,
				}}>
				{ALPHABET.map((L) => {
					const n = normalize(L);
					const disabled = guessed.includes(n);
					return (
						<button
							key={L}
							onClick={() => onLetter(L)}
							disabled={disabled}
							style={{
								padding: "10px 0",
								border: "1px solid #bbb",
								borderRadius: 6,
								background: disabled ? "#eee" : "#fff",
								cursor: disabled ? "not-allowed" : "pointer",
							}}>
							{L}
						</button>
					);
				})}
			</div>
		</div>
	);
}
