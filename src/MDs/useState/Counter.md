# Set from Previous State:

Often the next value of our state is calculated using the current state. 
It is best practice to update state with a callback function.
otherwise we risk capturing outdated or 'stale' state values.

e.g Counter, next value of count depends on the previous value of count.

