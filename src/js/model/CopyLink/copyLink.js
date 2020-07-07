class CopyLink {
    copyClick (e) {
        navigator.clipboard.writeText(e.target.dataset.link)
    }
}

export { CopyLink }
