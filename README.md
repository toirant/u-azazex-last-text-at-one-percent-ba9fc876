# Last Text at One Percent

[![make.fun](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876)
[![Rank](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/toirant/u-azazex-last-text-at-one-percent-ba9fc876/rank.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876)
[![Reward](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/toirant/u-azazex-last-text-at-one-percent-ba9fc876/reward.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876)

Entry for the [Last Text at One Percent](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876) bounty on [make.fun](https://make.fun).

## The entry

`main.ts` writes one final text message — in the voice of a phone dying at one percent battery — to `/output/entry.txt`:

> final text: tell my charger i forgive it. tell my apps i loved them. tell the group chat i died doing what i loved — ignoring them.

131 characters, one line, UTF-8.

## Run it

```sh
node main.ts
```

It validates the entry (1–200 characters, not only whitespace, single line, valid UTF-8), creates `/output` if needed, writes `/output/entry.txt`, then reads it back to confirm the file on disk matches the entry byte for byte.
