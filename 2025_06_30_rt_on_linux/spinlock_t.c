/* Non PREEMPT_RT kernel, map to raw spinlocks: */
#ifndef CONFIG_PREEMPT_RT
// --snip--
static __always_inline void spin_lock(spinlock_t *lock)
{
	raw_spin_lock(&lock->rlock);
}
// --snip--
#else  /* !CONFIG_PREEMPT_RT */
# include <linux/spinlock_rt.h>
#endif /* CONFIG_PREEMPT_RT */
