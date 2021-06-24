const listeners = {}

export function subscribe (event, listener) {
  if (!listeners[event]) {
    listeners[event] = []
  }

  listeners[event].push(listener)

  return () => unsubscribe(event, listener)
}

export function subscribeOnce (event, listener) {
  const unsubscribe = subscribe(event, () => {
    listener()
    unsubscribe()
  })

  return unsubscribe
}

export function unsubscribe (event, listener) {
  if (!listeners[event]) {
    return
  }

  const index = listeners[event].findIndex(l => l === listener)

  if (index < 0) {
    return
  }

  listeners[event].splice(index, 1)
}

export function dispatch (event, ...args) {
  if (!listeners[event]) {
    return
  }

  for (const listener of listeners[event]) {
    const result = listener(...args)

    if (result === false) {
      break
    }
  }
}