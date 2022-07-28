export const observer =  new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return
        
        let src = entry.target.dataset.src;
        entry.target.src = src;
        observer.unobserve(entry.target)
        
    })
}, {rootMargin: '0px 0px 300px 0px'})

