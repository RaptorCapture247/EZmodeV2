(async function () {
    'use strict';

    const lh = '[Pond0x-AutoSwapper]';
    console.log(`${lh} *** SWAP AUTOMATION RUNNING ***`);

    const referralLinks = [
    "https://www.pond0x.com/swap/solana?ref=NvmaEpBytGVkgKyqueMVbeFJMKHmZ9ma9ua2oWY22bHtL9um8uqq62zaLfBu",
"https://www.pond0x.com/swap/solana?ref=QWQ1QisY3qbXTjagoj8QhKeH8cfqwVbaryv6u1JNtDbijjFfpe63pQyzMVM9",
"https://www.pond0x.com/swap/solana?ref=NwWMLKR9AxBvomV4zJ3RNcHzZenXwjDF1PKoZJU2Awu9DhfSJvmHtDj16Kdy",
"https://www.pond0x.com/swap/solana?ref=NDfBToKjYToE6WWwni4GPgYR2GTK9VX678hMEX6jh15iz9auS7fg2vzPZfwY",
"https://www.pond0x.com/swap/solana?ref=A183mqTWEhgr5pebqMqYEN6zCCJVsMz9bVnmPugrwDsFcfX1aovCY4Ze2VG",
"https://www.pond0x.com/swap/solana?ref=JNkBmzWMUKSrauxiimtHZMQFn57ePkQy4zfG7FnJ2mxiENBED52T6iu3dqeQ",
"https://www.pond0x.com/swap/solana?ref=PtXGFKLWQoYcQRgx1HY5p3RNb1frZHZ7WPpmi5DiZHz2bvjP2sMZUYBRuHXN",
"https://www.pond0x.com/swap/solana?ref=JP3wv21Mdj6i4UfshzJ7aMQD9yBmbSFCX8BejiM9omnsbPGPhbUogR8KNq1z",
"https://www.pond0x.com/swap/solana?ref=JLUWXxoW8yRJ2dnrYDnTSsDTpaQJpuE34EdR4XBdwGcjJvovwkoeMyFu8wf1",
"https://www.pond0x.com/swap/solana?ref=HMbmEpRJLGmSfqDzHt5w5LgdFevB5sLd6ssTvVDJWDLLA362d4MiUVZ2JiRF",
"https://www.pond0x.com/swap/solana?ref=NvQFFP6FmpxiSq8EVGnnMf9VrNvTLBc6dMaLXsv7ZZjPppp6r1Cq3YhaiFAS",
"https://www.pond0x.com/swap/solana?ref=QZCM5qumkyw2KMwvQxTFrhPBXrHeuj2Sb9Uz59LEtAx2JHQzPM6Tac2zwPeG",
"https://www.pond0x.com/swap/solana?ref=HQYS1U5N7nTvVsb3HTHfkemahDCEUqopAPhV3c2pL6PZsTieCDUjxAkVLufu",
"https://www.pond0x.com/swap/solana?ref=PrNqmGg2r9ubtY3V6npd8MDnc2W1jacjnV5iR1FHYp843ppzsEATAnoke7eM",
"https://www.pond0x.com/swap/solana?ref=Pv1CMEc81vfv5wsNe9n1v236zexgfgoQY1eerxbdehkkPTQcSrUk7PAduwYt",
"https://www.pond0x.com/swap/solana?ref=Hfryd4PkPWPUTkfmtXYHic35sCtPJPeP25YH6VaFVo117ymq6tpLxpFzA5J5",
"https://www.pond0x.com/swap/solana?ref=QAoMKoiVCdSvzV6PxJWva4E8AARyCXLApDZEBJebsXcJj1pu2t3AkZD4PZry",
"https://www.pond0x.com/swap/solana?ref=NGuWP6MhcHH5oT2QvZHMzQKuejydHLMNehG8K8foYxJtiJFsTW3MmRbh6X4B",
"https://www.pond0x.com/swap/solana?ref=QBuPdBn6GWfj9o8Wc1xFnujxUwat6m1VQFcPPmb1b9H5ENQZPfm1a2AcPmmG",
"https://www.pond0x.com/swap/solana?ref=NsXR45Mo4jBtDf8Z5dfm7Kf3GuPTY5856pc1Nd9LCiTajmJgGr3tyUQb1qBM",
"https://www.pond0x.com/swap/solana?ref=JeXEjF2WxVeoGrPYZNqiEX3yfjdCgTF16Jg9LE1G4CEdbuxhgwPSySVSANN8",
"https://www.pond0x.com/swap/solana?ref=Jf6Gb7LNb9ySkpr2ejhSN7hhMXDnb2ciej4wEEMiDUQ6C2JhkgmkhcjzCuD3",
"https://www.pond0x.com/swap/solana?ref=HguPrQfJcYstjMbigRmSkax6pfXyjSUHKws9L1zgJaSYgoABuAM5X3vd3WmD",
"https://www.pond0x.com/swap/solana?ref=NYjrv6UQw2QLkz7TnJg9jc9JBN7FDySL3yoRkZn3wMAHhZUi4EsUh25SHR9w",
"https://www.pond0x.com/swap/solana?ref=HycbxsCvzBV8zK2c9SmNNLsi2paJRUF5MgJjjB47wVHjckV5KiCX89j3KCrV",
"https://www.pond0x.com/swap/solana?ref=QYbv8dMFTP1oakSSSm6LNF2ZUejgVc7TM6N6QAkNWm3tm8nXbehTCMKBqAhJ",
"https://www.pond0x.com/swap/solana?ref=PFU3PeVRvE4m8jkfYZ6L9uRAieFfrcRw4iQPvxxGUeMfMW17mwjdezxiHAEM",
"https://www.pond0x.com/swap/solana?ref=JJLBy8q3jEVsCorwqrrwpdKHqUQKDQms9wT4Y9ek9YF5prsdyTKtdLByn7Y9",
"https://www.pond0x.com/swap/solana?ref=Na8Bphr5B75yS1Y49ubkAGsPTuoLHxsnxeTeaq4QDnAk8n8YHT6ErS99fN1G",
"https://www.pond0x.com/swap/solana?ref=J3yAdJNktPnzJkQ48mqemyxjhQnGzc45uY6vRSYFHBLzKpPXeEsaYmmjVf1J",
"https://www.pond0x.com/swap/solana?ref=J1AXcggqW2Y1JbTfKsURLa59YDoDzpSGzp87hg5xSiwMArHmQSLPyyTkC6gp",
"https://www.pond0x.com/swap/solana?ref=JNfkJx5fsJWA9DqpvAWHDiAtgEmQq3dz6coTmCjML36DW38RYwo7DXPT6aua",
"https://www.pond0x.com/swap/solana?ref=PtSgxXbffVuLsmv5FjkRa1HME6FRRun6dRKv9LodfumzX7SAGpMZWpaFUC9b",
"https://www.pond0x.com/swap/solana?ref=KKdaGgQkPauNCm3fbF6RhtdGtXjaBatB25VPWWADV7BZ8YdLgX8eJ2AiTfca",
"https://www.pond0x.com/swap/solana?ref=PXTe61dZtre6N7zcbmLGj5tswUU1Ri2z1VvWXaXjegqurBKTNYGgRZLfDULL",
"https://www.pond0x.com/swap/solana?ref=NbJt8xmxaqwabzHHyczmZM9H4idGbDtM5LyLHorfmCbzjBvRgBuaMDKcNLSe",
"https://www.pond0x.com/swap/solana?ref=KJJsPs7fmUjuiu8zKgRjHvEcuXDFJpMmuHXouchx6VdaUHPRCcJyv94t7Yx7",
"https://www.pond0x.com/swap/solana?ref=HMyRbWQQBfEkno2zefgBixfRy2THQCtbUSNX5NFqs9oC8PeHYVr2MqY9iMhk",
"https://www.pond0x.com/swap/solana?ref=QBc2v4EtAaBFK3LDdGLrofJHYJYwZjTerTDywEVPQcGwETLhCXjBBP7zmewa",
"https://www.pond0x.com/swap/solana?ref=NHnh4CdEJRSqiVDkCFt6bGLAyeWhHzBE7eVmTT3jDiGcDNuVfvo9VVkUmFzf",
"https://www.pond0x.com/swap/solana?ref=Kg3Fuhn3jHceBP6dpmYrY6HAe7ecxHtf18VBU3DVL2YpcckwsZ3Pct2zzUzk",
"https://www.pond0x.com/swap/solana?ref=KeC2jAwCgw7ga466UxXEFLrCA4bsmjGyBrV2dyzBt3JB5zAcAAfv2d28Mk35",
"https://www.pond0x.com/swap/solana?ref=NFLyucJkSoM7gFS3JXwdhwPSCULUz2WR2xMJRM6D1ZoCMNRMT4w3n7T85xKn",
"https://www.pond0x.com/swap/solana?ref=QVekUVJjxS7GvspNjkDK1TiR18ZSgPqA22N8hAzWvPPAKKr6PrTH6gTyfMsu",
"https://www.pond0x.com/swap/solana?ref=Nb1xc1isxPqJYUfuutFqqHV9zaqyp9eU6F5dXMtqYGPfAd3oVBV4yL5qhSVQ",
"https://www.pond0x.com/swap/solana?ref=PrK1L912MMxQQZzJmgiW3r6j12VPCwVDa1Rmwox7npCRN5daSKjQUBfJjBHC",
"https://www.pond0x.com/swap/solana?ref=K2FJ1QeLkNi8sUkCno4tAsfgCUPjCD1bKsjFjmwREcFLmBUprMrQNnYGMd63",
"https://www.pond0x.com/swap/solana?ref=QUdV9BCyZGC8ghrATq7DYmYvTkadRPuc1G7t4L9mXKBJU7JEGbXMBiuvZ4DF",
"https://www.pond0x.com/swap/solana?ref=JfzKhB5XNVj8vdhHzicUknek6817zZXZfgDwSrgd4fd3wK2TjjiA5HudYmwv",
"https://www.pond0x.com/swap/solana?ref=NHe7dXRQdnZS2WUAgkvsBjjtzaD4jjP19ohadGt9U33k5qSxBxYL25fw33Yk",
"https://www.pond0x.com/swap/solana?ref=8cxc7FdQYwJiMMUdVbNCmuiqGv1KkhKjhxN7Q7biAzh4XYBP2N67UGqRJYh",
"https://www.pond0x.com/swap/solana?ref=Psdygj3q35pcP8SQ6y3Xm88KyUSx3AiQdAcWYmy8FuD1oRWJ3EoVvaWX3pag",
"https://www.pond0x.com/swap/solana?ref=PaqeNKTdgNLPssV9WcEYd7Y3KGfjCyNejk4MeEuTkHyqHhW4F2vEwVV4YBQW",
"https://www.pond0x.com/swap/solana?ref=HjF4kwmH5jnnsFsh2Tgr2gCfQhKWK8eA46WPcKckDabu3ohfU4vCnrSKCtpz",
"https://www.pond0x.com/swap/solana?ref=JLQ5zrTwd7zbx3MpphyvUxJvnWAAN66zwnZfi9G2CyaqzrAZ2dcGz5QWTSgn",
"https://www.pond0x.com/swap/solana?ref=KLjeKXUDZTzE1koGWnQeh2o8yFS4M4LK9tRacbaTSVVYo3j8QHi6PBbj431P",
"https://www.pond0x.com/swap/solana?ref=J16ULYWGnTiYaL8n4dJtYmhZf6cqHns8RM1nij1zU1TTpYYKQJ3A1xpfS4oS",
"https://www.pond0x.com/swap/solana/?ref=QYU87ALYEGF87qx57WAqVCSNEi87ZBCMEbk6BKQ5jy1j1xjr6UiNChvRte9R",
"https://www.pond0x.com/swap/solana?ref=PCTGV5pfr4GbS99n4zaHDJpfwewFMAntEhvJKwTvUNhNEn9QUQDfizjUnEgH",
"https://www.pond0x.com/swap/solana?ref=JNAC9siGWQvhQvDjniTkCV66RWyNwNwMojC8fiQFVwKeNyvVuQ3Cw1c3pBam",
"https://www.pond0x.com/swap/solana?ref=KN43t4P5fXGS4rWYprXAXw9kfkZD7Bf7yE8DVjjJsEgwVxua1sxaebofZa88",
"https://www.pond0x.com/swap/solana?ref=HPSquF4sFsCpWRkTbSGZXp7GzAGVoiBTf91yw8ZrYRZvs5e89iyLo5FCg1Dk",
"https://www.pond0x.com/swap/solana?ref=QWm9tTegSfV8tssL6e1vF7HVsd5WmMrCFf6jHkQgxtqPhz24vLxKtmokaw8M",
"https://www.pond0x.com/swap/solana?ref=QYYH8T3KU1p1JVM5YknwGW74SxEwGH4z5g2XVgnvWfGjt3NmMquvFk5zq7UX",
"https://www.pond0x.com/swap/solana?ref=JzgoV7P1TQVbRQTHW1LBKvsAcXTDbquVbcV8uEf9W3WzPAFXfugqCZjnD9f7",
"https://www.pond0x.com/swap/solana?ref=R8RXn3CF5wHYRU61shcNu7FuiHDPiCgmBaTTYLt9czoprKJVQ73wsV2jaoC4",
"https://www.pond0x.com/swap/solana?ref=KKBZD1SPHAbeGDogG5xLFpsyVXzUL6eyTjfMT6J3ZimxPv8P86b1VCAjTcw2",
"https://www.pond0x.com/swap/solana?ref=63RReTovY7nGNam7odsWo1xaUKaNCNrfd9zmSC3Dm12X1F9SxG4rpaXbe9p",
"https://www.pond0x.com/swap/solana?ref=NGqAj7n9yzPeKLvXCtAacAKEBftRQnJg9bvkrf6ZEHU54RT5FwPd3zH9Gmck",
"https://www.pond0x.com/swap/solana?ref=Na8jj1m9c4iQjRbKCeH7ZPDcD75U5WPwKzRiQNhUf3MoVxcLC7qobUAktEiV",
"https://www.pond0x.com/swap/solana?ref=JNyDt9wh3MRdvUsUYTrK8wrt68nYiWHVhLzdmhBEhYfukuKfKKSbRpU7E649",
"https://www.pond0x.com/swap/solana?ref=HLsCqmt1jg2ro9LVfFwGJ9FB9Xu65CRLqvdysAW3v4LmskiTk1FQRS4xZcSu",
"https://www.pond0x.com/swap/solana?ref=JNkh1E85PoBRUGae65uDmY5JzFFnxg9iVHH7rQq6snV7EeN3p4kK63MgUt9G",
"https://www.pond0x.com/swap/solana?ref=7W9ycAcJqXeFvkdsqBitNzLJcCtH5xonZPVt3hCkUzeRgLPQnP3eeW39dPg",
"https://www.pond0x.com/swap/solana?ref=NG17tQ6FXMEPw62ibFg9pqHYXNBwKSoij7UfLm54LQMXZxXRAC6iaMwYZQJ3",
"https://www.pond0x.com/swap/solana?ref=JxBqcztPdmBWHBQxbEPqxqVt5XVGs3mMZgT8A1KtaC264UrL5PobHbsNsLNB",
"https://www.pond0x.com/swap/solana?ref=NEqLm9tSe2teyGtKpVHf7jWmrUjkAF2gxvHrZJBKdPK9XuTD2egxPH9ZpLiD",
"https://www.pond0x.com/swap/solana?ref=ParM5C4E99SguZu8ajHWrhgKtRRgVRsiH1xRSKS1wtoaHaFByzmcCwVZ1tah",
"https://www.pond0x.com/swap/solana?ref=QErHviiCjD9K1JKrkmYPeyMxHice3G5ykMAyVrq6SvXiSQmXtkU8EkfPXZ8H",
"https://www.pond0x.com/swap/solana?ref=JNyB1SZ63VkTKZyJ3TpWMqjF5qiJyZczqpAv49QF6tUmk6QhfiSkPFx4UgHE",
"https://www.pond0x.com/swap/solana?ref=KKhdXvEK157C9TihipASjkAVvsVQHNn57FBLcNkLpJWzMJE1kUYosdLGDDTD",
"https://www.pond0x.com/swap/solana?ref=J1kPRRvh3txnhNkPBt4G2x3yRLuQ3QSJ3Ar226CFs51gGxaFaeRV6qjc6JnR",
"https://www.pond0x.com/swap/solana?ref=6YH2AViUbJi5dKxoJ5azufxCUeFkLRTPsLHmu5CyZQ5LNPsJZ68wT4ZzxAx",
"https://www.pond0x.com/swap/solana?ref=J2GGJuLRprXCP5xCBo53wEqyrPHQmxVJnwcbh5Qy4TWzJ5h6ZKmWRSPitdNX",
"https://www.pond0x.com/swap/solana?ref=JJGESKQJCshYwknWh4JaJ2wbMw1HCCxbsGS8H7pikFF2Fvd5o3JhmiLLQzFm",
"https://www.pond0x.com/swap/solana?ref=HP8dp6LAr58zNWHjxJkc5ESV1cVo87zFkhBMGnfaFiPhtBdnP8fGfDsrGiyx",
"https://www.pond0x.com/swap/solana?ref=Ke8MmqrbNM76e8Hvya8HgxzdkpZRRvXnBMF11xJx3tmEtvS51rML2frJS9WG",
"https://www.pond0x.com/swap/solana?ref=JMintgwR6kcPmXnmXnZ6s9PrXUSQe6DzgWMz5JaVv7qHTUAC9HfcXmoEhCm3",
"https://www.pond0x.com/swap/solana?ref=NtrYNqgrPTKke7khekUVY8FYtSjiwVPGaPZNTjNGttUq4Nk1DyMWrajvBnJj",
"https://www.pond0x.com/swap/solana?ref=5oYBmxBhZP5TnNLwz3xGfKHgw8i7wWYVqitcvGaBh9xJHNdWy8tKBWatgcu",
"https://www.pond0x.com/swap/solana?ref=KKKy6e4GWgj1YPWD8Lq45JcG4fUwHc2c6QMARRor6NnRLi4SJ3L8hLY8r4Ca",
"https://www.pond0x.com/swap/solana?ref=QAxRBmcQggQUHgMQqskr6NyEPKjuaR65N8hU1PvVvs1fDJ6RuJVuM2tGAmSe",
"https://www.pond0x.com/swap/solana?ref=NbgRrZPfHtw6XvwQJXfyXhE5NoA4StDeia9vCpf865w6krTu9W4kuea3yCAD",
"https://www.pond0x.com/swap/solana?ref=JhyfHfP862SrqjuwzkSjfpABpZv2J9mfZvA4Nes19qxurYPBMSmgEWLcTyaZ",
"https://www.pond0x.com/swap/solana?ref=PrAGwfxE2aJN1gUjxk8eFoZbT69RKmyjmCcKAiSEff2oUKU4AuQ4upGqhVP5",
"https://www.pond0x.com/swap/solana?ref=KLshzH9biPYPcX6ANizvy9QzyaKgwkEJTMQqnMi2RVToyUcyEENLNvQNzUUy",
"https://www.pond0x.com/swap/solana?ref=NXV6YwLh41ZH7xwni9SVwLv3Y6Hhb6y9n1z8PWRvdsVydfA3eAqoieFKctTC",
"https://www.pond0x.com/swap/solana?ref=JyxQxviyH3DTUKHJMXFjMvNGJ5JPgoDkqy17nnSL5C7DnJLfdEe6MQtpEG3X",
"https://www.pond0x.com/swap/solana?ref=8KEnMoF8cmGxDQP6SQJR1dgvrfqEbAnF3G6CEaDNgtmPEobNnhkkZRuTeQq",
"https://www.pond0x.com/swap/solana?ref=PtNSxfN1XiQbPV4ddq6B4PvYBov81s6oEZ1QEhUCHx3F5budP8aJW3U2HS2S",
"https://www.pond0x.com/swap/solana/?ref=HKuGFNXLriZ77sxfCL12WjUFUPDxExyb3TvPVSPncJp2frdL9AYiEEY6yXNm",
"https://www.pond0x.com/swap/solana?ref=NwLsKSc9CbjXUYSTysCZ74x1mW5VZXoTAimfZpXrRqq5znwbsyvqBLKBAaH6",
"https://www.pond0x.com/swap/solana?ref=PEsiDzowZuV4LWXgawJtDqvCqr597zLYz7cPJxSotER4Mk3nefeGUCoiDBx8",
"https://www.pond0x.com/swap/solana?ref=JzUmnUKpvjj8AYLR6Cz9bygAK79i31m7CjWwkg66abXpqbvuHc9DuvBS5udo",
"https://www.pond0x.com/swap/solana?ref=NtzX13z75q8oRgb3gYy2ZrKWBbLNLyhjrcLGjY9HdVDn3t7av2aL5oeT28qJ",
"https://www.pond0x.com/swap/solana?ref=HykoDKL6hvJX3zYuyV9RX8eJLH8MFJxfZQ9UdNcuzin8Wjj47XBCCmDk3Bub",
"https://www.pond0x.com/swap/solana?ref=9aEc1fsRwCWMBo1Va93p28z8guxPBPsKFrceBbZtcKV54qeNxTBRgMV6PRB",
"https://www.pond0x.com/swap/solana?ref=J1yTLRAuqyK8vQM8JvQVY4bQrP7ij9EgT748ubn3CrDtbvVQLYKgAYjrzN8u",
"https://www.pond0x.com/swap/solana?ref=JhgdzS4xzA9Gim22qkgJJVa963tw267TFvaw7t8ouBzxmeqdfRSgsyrijAQZ",
"https://www.pond0x.com/swap/solana?ref=KfDtgjDSkX2UTpTJK7LgEvRSJm3LvH2r7ApwJWWGXh6KWQv3QmdWFodiSEcD",
"https://www.pond0x.com/swap/solana?ref=PpmcW9KjWJ721hXA8XF8g7LrqwAwS12MA7z5GG35H2PJtw7mhEYWuuasniNQ",
"https://www.pond0x.com/swap/solana?ref=NZhGWrmCMo49HSTw34RyfxMdcNpCwhZqwRdJNvKUPq5wTreeM2eMNzXyE8wR",
"https://www.pond0x.com/swap/solana?ref=6C5nycicgfzrY6XT74mZrgWH8fP8QSjhekWPKP8orrng9FmBypXDUTpyamh",
"https://www.pond0x.com/swap/solana?ref=JxLPDMbE2qhFxsKwbKWf7rcDcGQiTdFR72t65DJypsCsbP1Q5MTpGhxqLWdb",
"https://www.pond0x.com/swap/solana?ref=NbKdaT81Y16kqeM4XBTf3vDqwFbT7GEtW8MNLqPPNCGThJMMY3wyYpZMh8M3",
"https://www.pond0x.com/swap/solana?ref=PBLeMA6BLvMJmfSTbYFDwefjwKWST1enNymYpVeZyZLQPXEnFuwd7tXRGmtb",
"https://www.pond0x.com/swap/solana?ref=HfZQXdtumLigpgd17Estbd2fASVe1jrD2bAHp5n6VQR3mF4a5mCQ5cKkqbwc",
"https://www.pond0x.com/swap/solana?ref=R8RfdWEY8xQJNzKMhnvNh9F81gyPqkkYbjvycmbSdX46oP4W51csUqN2TuZR",
"https://www.pond0x.com/swap/solana?ref=KMgW3vkQfqaWXYgJuVw3B5ADcFUg6v9simhzibFdKDwfMQ8L98GSd7vMryqj",
"https://www.pond0x.com/swap/solana?ref=K2qi9Tv6NEYVXZ4LYQ8twUfiwHmczVJk6W6QrwiUwei5j83twC7SzBhXniGd",
"https://www.pond0x.com/swap/solana?ref=KKUj9coupdaggZcouDDZToPag682RfvK1CE5Qc83PovBuqxfPpeSc7XrTuAU",
"https://www.pond0x.com/swap/solana?ref=Gzp9UzLXDyy5aqDKgzcj8j3DiPH9BygBxBfivCzfWwNsTyUsrngDj3Bf1tT7",
"https://www.pond0x.com/swap/solana?ref=KMTrVx54ZyJkdRZAsBS4kxn7qAuR8HQ2QDYgCi3dcjoyodbKmYMdb4JfUofv",
"https://www.pond0x.com/swap/solana/?ref=HyQAtbRiS32EWSCGVYt1meYhzUTgJHb8aGaQs5zVoS86VsFXK5fspHmWChKj",
"https://www.pond0x.com/swap/solana?ref=NsXXprB2PvG6vGXQN3ny9k6DW2Te7q52xFrbpu5gvSZE45HBwK4dSXqwnCVh",
"https://www.pond0x.com/swap/solana?ref=NEEr1x8JP8VRdJibE8BojK5vGUaz5udHVFVYfLrd9f6B3LymLHA5u2rgiUpU",
"https://www.pond0x.com/swap/solana?ref=NEq1TJRJ9VHNpjpzVv5aXTamqoekRQM92hCCMaPj1VuEbrQ1oc5zwVtUbK5W",
"https://www.pond0x.com/swap/solana?ref=HQkeTAPjjYR6oHErfBsEa6Yy4ZqANt6mLNDzcpv8U8MaEbuCg1KJzWz7FGZC",
"https://www.pond0x.com/swap/solana?ref=QWumJHbmsovQRyWQfNsKX7Ux5NSKwSmAfXwRjwnoJbk4NdyWBgK8A7VYF2RS",
"https://www.pond0x.com/swap/solana/?ref=HQpyLQ9Mi3uV7BvvJMGZn4KVNDxDtp3cRaiv66sABTttqpP11RgGz3zW7FA1",
"https://www.pond0x.com/swap/solana?ref=NcCGWByJrB6HG7EoPqGaawRHTcgL9uoGduk8GTcX518qVQHpxKyyLcJiYhwZ",
"https://www.pond0x.com/swap/solana?ref=NZcWoPZWYtAFceCYZKmpaLK1ms2q6VAHnum33NzKLDwxVaH8eBpr9Xq4VhGr",
"https://www.pond0x.com/swap/solana?ref=PazfvBpbqoV2uv7yEDC8oe7ooK2q4f7FAt8C2Z4hSBxYndAgCAufMNEQn1ny",
"https://www.pond0x.com/swap/solana?ref=67YW17QZU9s86VtkStwbMs8xdVaqAKMvVT1ggk5EtEabf53upzVUeBDxDwK",
"https://www.pond0x.com/swap/solana?ref=NCi1RZon6ksX8QEG6xN2MJ6FDVvdaD5HKLrc7Pnx2nrXNByAm7XU16Rd1uop",
"https://www.pond0x.com/swap/solana?ref=QDyDkdQ5mBR4u8GF6sRi8fMZdqrvDVgryYDTnTL8xfwGLZRwHfhc7JKDQFjF",
"https://www.pond0x.com/swap/solana?ref=5E3RGAukNzLAegiBfdStUe33qa1PNZ8HEVGhWt4qSP9HQxBZTbobP1RwHoq",
"https://www.pond0x.com/swap/solana?ref=QDPKqT5MyXHPNLh1QeNcR5v4pcFQ37NyngobeyBDBgVoovH6jz9aL8gH3o12",
"https://www.pond0x.com/swap/solana?ref=HhRRGEXL3tm4zeG71DpxXsTqEacTn8ZTwyMVVxofKLppmQNuTVqDYUrrkaAF",
"https://www.pond0x.com/swap/solana?ref=JhXutudS6GyzkiSYMzqaktVC1ebVncjwzrgfqCDS51NLv7Yv6UWE66PELCZx",
"https://www.pond0x.com/swap/solana?ref=QZGT8zmC7t6CZNW1vzZeBucL8qUFkFMkXg3TgbTYDVv661UzP8akVWzvx4QG",
"https://www.pond0x.com/swap/solana?ref=Hj6wFLfkdinetgomE5boLt42gFN3X2q6ddWkX5kCYHtvrVTdPJsT48zDQUFz",
"https://www.pond0x.com/swap/solana?ref=R8VGhSJEjQ1DJYXd8HxpMHKBZDDMTheAisL8XHPFVjWuDux6yK1NnPe165zE",
"https://www.pond0x.com/swap/solana?ref=NEQ3GNBYE1THPGmefaPM9FM4BDkw6FvwRePaQE7MMpH5pLuYaxgNiFsFM9um",
"https://www.pond0x.com/swap/solana?ref=J1EFQt2hcUyETqKm2ZhBs3QpBHTLVZdfCJ9Pbo4eb6VNwW9kuS8eAW9Lw2fh",
"https://www.pond0x.com/swap/solana?ref=QYP3oQLZMzKpRoySHgs6jkJyBcCoReij1DcWdPbUq1q4FKrZRWXPWS7KHbj7",
"https://www.pond0x.com/swap/solana?ref=NaD2WWn4Jy8tzGQn9YAFN6fpBjqTEgoZfAeAvEm2z8ydUwvgqfa5ghy4fEfc",
"https://www.pond0x.com/swap/solana?ref=JLAda7J7Z2FdPyX4g4NvGpBs6KyCoRHFpouFwS3oWeiyKbdpqNLcZi1GALYE",
"https://www.pond0x.com/swap/solana?ref=K1tBUTLRk5Ndkq6B3EVKEQF1WMorHyRxDUJBoSnBKUU4GYBCtyQQJnoAPbF1",
"https://www.pond0x.com/swap/solana?ref=R9HwDYwVPRnokoX3twiaWQ2oeAkpp3fCuYi4aMf62xNXwhGzh8JBAsHQdCuA",
"https://www.pond0x.com/swap/solana?ref=KfWt6kmURAjqsYucaEDrmtNAFg5nCA91PBej9F8RYcV4fE31pTCRC17wXfDQ",
"https://www.pond0x.com/swap/solana?ref=JyJabgfwDaVzJr6fesS9VKgWYMee21R43NgCfrew7bkYozxeYAYdj6Fggmt8",
"https://www.pond0x.com/swap/solana?ref=7VoeKBDHatiYY2D2e7NFtqP223Wm48svk4riEPzxtQXy5no52nJbfRzkeQe",
"https://www.pond0x.com/swap/solana?ref=R8RUyk939fYqE8BQzw6rzpRmEcLzFoHRBwhsYMXXMNGaH86uo4poe67BDvED",
"https://www.pond0x.com/swap/solana?ref=HPJKFHWfFsFhk3t9ZmMkJPupiMX3k5A6eJ37M4FW7qaSbGoSCCpSJXcHS2Fj",
"https://www.pond0x.com/swap/solana?ref=JyJMxJmgCQHKqf83ejFJibbaox5s1zX84vxwNkkHu2eEXS5wrZV2nSbE1qDV",
"https://www.pond0x.com/swap/solana?ref=Jfd3Sb4swYvct8pxobGNXEKuofuDVUm53m9a34F57oC8RoHaVvfxdLYiswFq",
"https://www.pond0x.com/swap/solana?ref=JzqcjEC91odtCnMvwkikX4uTanu9RGuDsJCCcTT4YPEQycKS6MUQ95Ttz9Hz",
"https://www.pond0x.com/swap/solana?ref=HiHuXouUXTaqBmaNntmzdnd8mshnYGAofDgUKUvZqMErPn9Ei58uVJcYsxpN",
"https://www.pond0x.com/swap/solana?ref=HMTW7p17g56HyYcasePGS7zUrp8pryxN9pEnGsMiZZiHNc6E55KWvd1MGRDe",
"https://www.pond0x.com/swap/solana?ref=NawmWLYGDhAteLGJAoWWWvcvt73fTz6Gn6si8d8WTgzZ5GamWDcoVr3j2anv",
"https://www.pond0x.com/swap/solana?ref=PVudiJJqFT18Dvf8P88MTsA2v7UjtqKzBRp9uEpFLvsNgXApD25UzrvZMu9e",
"https://www.pond0x.com/swap/solana?ref=JyDHcZjg7eV73ktSdBTtysh5SdKvqvA59z2F1R6JrHLPm28rmoBRdcDVYAYc",
"https://www.pond0x.com/swap/solana?ref=HecwkWpL7J7GQVBn2SooULWZJ1WK88HsRZMgFWWv4jdDY2a8T3jVMq6VkgQq",
"https://www.pond0x.com/swap/solana?ref=QYAFEb6CPpvgnRx25Yjj978iY6aswt9sjbpsvqm3TuQUXod7GT3pt2qhpUc2",
"https://www.pond0x.com/swap/solana?ref=JMsUB7FycfdBVpAbnkezP51BgAYEbfJKmPC3W9PfEewE1uR1DJ5469tEYp8T",
"https://www.pond0x.com/swap/solana?ref=QDPKwbHgkWDAjbF42TJJntgUnR4irhQSVUnkg77a6SNntmfAg4vC4eA6LMSh",
"https://www.pond0x.com/swap/solana?ref=NceBw3ordXQqnTLBjz4Vd47kB83d7gwENLFc1Ssgn93dWzeggtHANZ6XHiCF",
"https://www.pond0x.com/swap/solana?ref=JhmENuH9EmPFdehRYbrZkzm94C6r5NTJNDmWNGEMhvW6c8UzDhy2hQUeXFkC",
"https://www.pond0x.com/swap/solana?ref=PtfuZ24nCMbfiF3JCJgmKBq2eCX6t7BhQ74cd5MLZogiFAAYe5ce5VuGEWgK",
"https://www.pond0x.com/swap/solana?ref=HMA9HdqNhQYkxzK4bRKpNFvrrf9QsmnDTFmqavvzXckPH8mMxsAJF34xGQHs",
"https://www.pond0x.com/swap/solana?ref=PFBMEAYf1woL4QVWP3fVGucEKqPXJqgN8ENxQsV5nmtCJin2AZtLne1QdiuQ",
"https://www.pond0x.com/swap/solana?ref=7Dggc7EcQevym9bFCprHN2o3XHNPemhpYqeYv5e2XrrycXGV9KUWfZNP9sn",
"https://www.pond0x.com/swap/solana?ref=8Pk8bfmabY5qSYVtdP32MgxNCF8MVtoDEmxheB5ijbYmzeqEzP3XqvNazWw",
"https://www.pond0x.com/swap/solana?ref=J162xXh9fcUXi3LV8Xdb1Pq86s4eKuo9Ni2p8tvPg8HNDRCQZAQiMoN8yB5u",
"https://www.pond0x.com/swap/solana?ref=NspPm3SDvBcRs7ceSLitnwrjzmY3YJY6sdex4D6MuryFLeNkiS2dB519HMxc",
"https://www.pond0x.com/swap/solana?ref=HMXB7yMjfFoZQZ713Gi5YQsG84Ea9SEWpSJpJoV3pPqjept2iTEkZ4afhrC6",
"https://www.pond0x.com/swap/solana?ref=QBBV648An8zJAfgGTmxdHpK2CnAJmWtta5CCB3biyGLzfH1PykngagSFbznd",
"https://www.pond0x.com/swap/solana?ref=PrcVmoN2gY7WbEDMgTxaBEUNaoecjreotYgizPaHe22xVwqWhNrmuXs7TmzW",
"https://www.pond0x.com/swap/solana?ref=JzPw3WQmuiuAoiVyot32NKm92EUJ11RdHmJgrqjqiFxDas8e63KzqwGz5si4",
"https://www.pond0x.com/swap/solana?ref=NwVfY54aJHf3NTZT4iKYRawdXHe12RjsZYVM3UFFDtLGjNHckwBuaZKFg1RG",
"https://www.pond0x.com/swap/solana?ref=JhXpwc9Vtr2GyqJaY2DQwewVM25QQbwP4HzfcJXzcYDtvsWJQcupHpwbhbje",
"https://www.pond0x.com/swap/solana?ref=KMQTkZPpSyPXK52kb5NNMcRMxmj7b5g2h3MvhrzLnEuQ7iYkvKVEoZHJHHst",
"https://www.pond0x.com/swap/solana?ref=NDbA8PDXJ4gwdcA5jDsyLVoH4DZbaniid3aTCh34QpdVpmVmHJpCGvFBSvzM",
"https://www.pond0x.com/swap/solana?ref=HNCD9nJSBUBzyk8fkcCeCtN9anwgboPVTKhqUaqDFoNTkimYiaMmSxaKMg8H",
"https://www.pond0x.com/swap/solana?ref=PZjY7MBuvi3RRoV65izf1VZYrAJgaXKf4sNzraHEWzCpFrkvmUoqA1i5b1a8",
"https://www.pond0x.com/swap/solana?ref=Kcj2bjKDyw9k43nRfzgbybPT8hqAZ9DWwpVVEqSbjQFC1hyau7iE27bXuydF",
"https://www.pond0x.com/swap/solana?ref=KGqNNE28NYoEcQ5VA73Jcs5uASJv7Vua1iFWZMtQkLjfXWs3sAVYi6iNKx1W",
"https://www.pond0x.com/swap/solana?ref=HKpuYAyaCpnFw327TRwBX6Mh5GR5HEmDhd8jz1XcLpbXRYxr7GbtWqvAdWsa",
"https://www.pond0x.com/swap/solana?ref=HQ2kywcNhHaqKGwyyn5YpoZeLj4KrMFH5YMSkx1dCRYX38Wk6XpqtybuQQx8",
"https://www.pond0x.com/swap/solana?ref=PYdFScKvKHoskgiyY243rgzrhm2Mk2oDK3GKPoCMtq1DhNT93odMZLQPxiM6",
"https://www.pond0x.com/swap/solana?ref=NcaCSEffBjoqGzMsTYB9BzM5m5jr7Dh2Uct8w7Y5DEKWXx36KuzXQRc7Je4T",
"https://www.pond0x.com/swap/solana?ref=R8Uw7AoPwtFcQTFPtk4GqAJHiFPfgdX5RmXRXPW8bssMmkFssg8KJ5hGeG5x",
"https://www.pond0x.com/swap/solana?ref=NZue3bAm4KUoyxX2SJQLpw1p9SwiZDsCuXjuiRBAstX3iBvzZyi3wo7uHMwv",
"https://www.pond0x.com/swap/solana?ref=PZbYgU1Xuf9FpmNpDpa1X71bzcjR6KkV2jS5MYLNFJyiGohM5un2GLVt2GJg",
"https://www.pond0x.com/swap/solana?ref=KgAsHN4Z5QvdmQdxxY8Vr843jGsi7kvktFBgH8AkksRDsH2X5hBdR7e8jdyQ",
"https://www.pond0x.com/swap/solana?ref=QVp3d49wNkYiftyN8W7nrW4DhX4RoSXzghNSXEW9h5qCVSuHec4abJNUj4hR",
"https://www.pond0x.com/swap/solana?ref=PtJhAbqvwAXFCwHPU2PvuCYHHvmffjzRcVgDegdvwqVaqG7durp4X1dVBBgj",
"https://www.pond0x.com/swap/solana?ref=KdtPQZcvgbcaD49yUzd4U1DsAQm8kqTjYEGGAw8EvYQJ9bJdBs2zx7y7dYEm",
"https://www.pond0x.com/swap/solana?ref=Nao95iL48PGdy9R9GYNaWi9Y9toiDobyS1ByBTyvx41TMrTLrUxXz2oVVCPC",
"https://www.pond0x.com/swap/solana?ref=Ppmo9todM2qkYUGrZNuRAad6BzjG68oZMPG5hvYxoir4RFReonLJyGUZN6g5",
"https://www.pond0x.com/swap/solana?ref=Ji7sWiFjLHW7GJ8PRSjPa12GW2kbe9CVn1TAVTyKjhktoRRBfqgHgxFqGQX5",
"https://www.pond0x.com/swap/solana?ref=JfcDzvBibEzSuYhVwkVXUNHtYmN8kGgBdHMwGnzWZTrE9N92xxThUSaprSHi",
"https://www.pond0x.com/swap/solana?ref=K2UCPxL7sES9qFWRN8dhEkqshGXAudjwxyYsqfirtYHMfMfjoFri7iCBAc2S",
"https://www.pond0x.com/swap/solana?ref=5yCbXUnkM8B6ciB7vwPXGvqd2uGC4KNuj6L2rsx8aHoVtnskKUfHEe1BPwD",
"https://www.pond0x.com/swap/solana?ref=PYCfaU4VBee9ZGD9ksMvJJKT61wvBAXrNVVg9P2cJtihdtTBe3jvZWXK2mD8",
"https://www.pond0x.com/swap/solana?ref=HQqXJ2SkTYyaUQgCji2tRz2VhGndsyun3crPZzKd52XYZoxJ4bfQpUPTeyDr",
"https://www.pond0x.com/swap/solana?ref=QA5G8wMeKGqzE69JBdQ63JXAumcogdrmJPc82TwtK4eQEo5oT4D9aHZzia1T",
"https://www.pond0x.com/swap/solana?ref=PZyA1FBC6dLVxjNWkoV9FZ8W4px76kdrN97Cc6Hds5kkK5pYnVse6fRwuttS",
"https://www.pond0x.com/swap/solana?ref=Hi5mpBT9WGumps4wrQzHxbEc1iKGihayGTaeqBXRPj3e1qTgGdb2GNW1NXXR",
"https://www.pond0x.com/swap/solana?ref=PCp8Ty6ZmxAGD4soVLrZ7paY8NnSz8zNBn9JRB1bkoedbPezPEhHKn35YNjv",
"https://www.pond0x.com/swap/solana?ref=QDEDEKb2Ym61obBkq3uAUaYnu9iZksKJFAKbcxxYFmcTzc1wTS77HFoCm4vD",
"https://www.pond0x.com/swap/solana?ref=Ps7wArnny3zGnzvcHvbNtLTfuhniz3eVPeYAXrRTcb19TdwmHUkWhBikRM9c",
"https://www.pond0x.com/swap/solana?ref=QEqvVDtN17ZJDxSPwnbWfB329LbPoVeaNLm9QunEaucAY1mda3qHJdo7pksL",
"https://www.pond0x.com/swap/solana?ref=PDFiWRXTejPn9gCSAeeTKJBVKmK4SvdxJf8TmSVzaXMNJ6nVGt63VUbovAm4",
"https://www.pond0x.com/swap/solana?ref=J3jv46HpdXAAYGEzh8c5tmxAjXPVSMHS7VCEEdY3s8riiE7Yp9dbcegvySfb",
"https://www.pond0x.com/swap/solana?ref=KgZ1xsoZ2PyZqHTKpCVi4imvXe7gFpkop5qoVS9fJPZC4hA5TgSVFJhjK3sn",
"https://www.pond0x.com/swap/solana?ref=Q9r3VMxLg9ZhVpvS145r6GdHEc72ehhJn3VzERh3gGNVUqgBf33fCCZMhq5G",
"https://www.pond0x.com/swap/solana?ref=Pa7CZxRYDQusGKQDnSjMBA2JGvxRCZ7JrAZhHZ14KWF9L3E7KhQBNxojzPxX",
"https://www.pond0x.com/swap/solana?ref=PF2uTo3ebhbvZGLX57q1Lr3Ve1LgX96HHsBqRFnN91i16eCrLRWryA2LvPba",
"https://www.pond0x.com/swap/solana?ref=J1XwGtrwbX44PaccGQTRy3zRCo3JnJ8ZeMt8oenX4DXLHAhR6YLv4MdGTWwR",
"https://www.pond0x.com/swap/solana?ref=JJFXecJnBCv7ux8us9Cqq8vPGgJsQioM6ZhzGkxp4mT2PUbQU5x7XKpnejXe",
"https://www.pond0x.com/swap/solana?ref=JP7XyLZ2QccPGJceekCjQsopPsNh7HZhYAwAXbW6nGo4MnxnqvwdNWPpwXcm",
"https://www.pond0x.com/swap/solana?ref=R8GxH7yQdmZ6mndbFkNeHvh2xrYtQcsH2vggo95HrcJGdd3G9ekSXMRTmoBJ",
"https://www.pond0x.com/swap/solana?ref=JLmR6mtpJrYPvLPNTJRDWbCWUJZAJSYUL2JTdMA9rYPEqQHi1G3avh29tMA1",
"https://www.pond0x.com/swap/solana?ref=PZkPggK1yMqDDD3CwQqbcrC5bbhZ257RoEXye4JUSbaRTCZXZVM4M4SjF5jA",
"https://www.pond0x.com/swap/solana?ref=PuVB3awas78kdErhKBZyRBeDMYTprTxCaT8mUwGWerVgiyY7tVimdNie7AuE",
"https://www.pond0x.com/swap/solana?ref=HLn2oFpmaqEq2xfwsVsECD6HfUscUNgT4V15NaRZCGGmPbqBpF3qzxm1xApc",
"https://www.pond0x.com/swap/solana?ref=Jd7xf9HMDC77nGYX75aSMwEibmVqKnkgJbmL5qqYNVCJ7MmGtBqRDr5PMfMS",
"https://www.pond0x.com/swap/solana?ref=KgQAxDWZBJcGX32kv6xLTcp3RJmjNcMGJWAEpVotnAnAbtXVbZkEqbkEcs7k",
"https://www.pond0x.com/swap/solana?ref=QBTVBnL8Wbc4DT5KfDeyHFSo2iNM8P9V44zYtiiBJaHC1MAuVSjPj75iDLZK",
"https://www.pond0x.com/swap/solana?ref=Pr24pKo6Hha5q1ycjDyFacdt9mHBz6TTCic9wTECY3fccAsnqFbYbzHDaXDV",
"https://www.pond0x.com/swap/solana?ref=67BAS69UVkcypLQ34qeG8zctnHwTs9FMix4zUGshRDEhw5QZ8EQD1xy7TuH",
"https://www.pond0x.com/swap/solana?ref=QZnpua2sdtP7XAhszVavEfxfvwZRm8tZB2hqbZ8fRGa8VuP9XqVANUmAj7fd",
"https://www.pond0x.com/swap/solana?ref=KHrsCv6iJ6wTGydeu8eFHupUexztvEtnpDw9AbuxYUxAG9MUp6gZnrWaMiaS",
"https://www.pond0x.com/swap/solana?ref=HjhggdC141Hshwo3tNpJbvSouGjSynmdFoWyyzCPkFB6YHN52sKHuxSNYhKk",
"https://www.pond0x.com/swap/solana?ref=QA8jXospFyfrWZCZeu6B7dZVB1MfXNJf91UwM8d2NSaVVEFics7CdG9bQLvG",
"https://www.pond0x.com/swap/solana?ref=QZCsAUmufQ6hJJeiKKw4V3WHRzktMVD8GZMhdoYBJPPyi54sYusMNj2sFU3h",
"https://www.pond0x.com/swap/solana?ref=JL28yu7WxWHaZyntGF3eSQ4BPahzdmTj6qfyv6odH9hzANWWpWBbzWWRQAFB",
"https://www.pond0x.com/swap/solana?ref=HekSXReLx4xxiXPqfmUXsMHV5fDZgNgBPAZzq9Cqp2mvDxas5GgFs2c7Lanj",
"https://www.pond0x.com/swap/solana?ref=NwVQ5kawDAuHLaZURSC3PtT5CDZ7BSUKatjeBpSRNGMKS6Wibefie2CNRTXW",
"https://www.pond0x.com/swap/solana?ref=PEt4ZSwbx8e7LGEbAjdFoqwKhk78EcshhGXcCok6DxmGVFV3pW2pSS4Cer1w",
"https://www.pond0x.com/swap/solana?ref=JhF91SHGJd69iNvgLjL8qykvrhpQLQii1krRJF1yyKm46TLRAfFWz6UW8Vu5",
"https://www.pond0x.com/swap/solana?ref=NGuAqvFbQyp2xT1JjyNcdQjYtiKJ9XJ9vfQPdthnKNpDrfNwRMCXDPzuyhMY",
"https://www.pond0x.com/swap/solana?ref=PW8RD2LvAxgEJFtAbstW7GrAcbk8VK84x4fCrxZvPHNneGP4SFdqpfqqR22P",
"https://www.pond0x.com/swap/solana?ref=PB3NhsU4Gj4qnGuoKwbEQHoSUkvhx5CQWpzQD8Ndiwh3J2Nw6iYCbYnnnkf9",
"https://www.pond0x.com/swap/solana?ref=9eKmBsUbxsXBCP7MHQaVqt2dQerM5q2LsF9ro6LJpVyR871epMeZW4EpiKs",
"https://www.pond0x.com/swap/solana?ref=Kbu5XTijJxiUivs8zX9KbSRSpp89Pzd3cfNtWbv9P5tfEceAqvevTqGqmH4R",
"https://www.pond0x.com/swap/solana?ref=JdUhxUnG4zpnMocrhY4FnCPHw7xHq23Jy1ZSidGe9gVXTA52UHsSZW6ahXLt",
"https://www.pond0x.com/swap/solana?ref=HfiyCFx9hNDtSoW6DUb4ofNc77cbi1NSe2RLXSUjg9jeEGYdHQPZEdfLRptD",
"https://www.pond0x.com/swap/solana?ref=HKyNHZK9qB9RqSAvCyMr2o4YUADDwpA8AN9La9sx6BznkDq46AL9Gs1qAmHK",
"https://www.pond0x.com/swap/solana?ref=NZcahH4G4kegWReDho3KhJa4WxynfFMkET91Z3DBwgcuXGXyPuyUwMN1Xnzf",
"https://www.pond0x.com/swap/solana?ref=NrhzFZ488LuX9yLnvnfxoVYkEcxP22wFAgPCnivnt9SVmKWCpwHzi4XKLzKQ",
"https://www.pond0x.com/swap/solana?ref=A1xCFH4MENPbJXB26766LBdsNNWoNZea9goAUkVgaP3DWNxdjdvJU6B1mYv",
"https://www.pond0x.com/swap/solana?ref=JgwWeLUXtqnfDdJbiyVcrELriZbkZp5qi17rwJvmYKjc8y2BGot7MxUFyTa1",
"https://www.pond0x.com/swap/solana?ref=KgBirJt6QNsmb9zXs3jAgbUdWn1okWPTa74H8DKx2DGMZe7hrw1ansfy2YRr",
"https://www.pond0x.com/swap/solana?ref=Kc8dhmbgzf9rM8cq8EwvfeBWZQqC97yV6Hv6QcYFRm3rMtAQfwwNR6w3RhWv",
"https://www.pond0x.com/swap/solana?ref=6dbsCj5Pe1iRrcmYCiw86BR36PtRqioAVdCadJeNSWNn9DMsFT8hyDN81Ln",
"https://www.pond0x.com/swap/solana?ref=NrVHaF2vQk9yghQUftHjtPDtFF48u4LJfKHZbxFmHkTcqHj38SrXcia7JY8Q",
"https://www.pond0x.com/swap/solana?ref=8uSAGgqZ5RCD3oSwbgs59gkHVrtDRhYx4tR4TJXixUGfqPMNZf5SsvyvzL9",
"https://www.pond0x.com/swap/solana?ref=JN1t3d8kghYKztwui8hqDgMNcGWaJLaLyiRrhdZFaNSMCicTeaTyzHjsweNi",
"https://www.pond0x.com/swap/solana?ref=J4QmTAaPr5KqSV7bKeknicVmdsRBAWgVAbfz9fqDKNGuRviKY8B3MkDCkRdw",
"https://www.pond0x.com/swap/solana?ref=PtfiqJ2epqhX4pzM7SMy5FCKurevsSoz6f5yBboMQyCgD9joPvDssva3gfyQ",
"https://www.pond0x.com/swap/solana?ref=9MFXJs4zcyyFc9MnebbF2VcrHeWUtjWUojBTBoMBozdgp9R4aDkrWFFq1jL",
"https://www.pond0x.com/swap/solana?ref=KbYEecdVXkrXx19jvtFDKNkpikK9ztsvSJZGL2sVXmpaaKSdM6RrWWtenEML",
"https://www.pond0x.com/swap/solana?ref=QEGu1H6LWH5GKGugHpjFKL4433fHaucLJYQX7tC9jK8PzGtXhpU49iTGrkwB",
"https://www.pond0x.com/swap/solana?ref=JfYHYNvfU8f6nHgQ8ZYBgySngnYt1vjmV1Sb5SMA7brZYbxsNGwam39PQfCT",
"https://www.pond0x.com/swap/solana?ref=JLcoczsM4jTySscYZxT9RvQ2ruKz8jepJ8EHCJrxypBeg5yC9RnLjbokHc4m",
"https://www.pond0x.com/swap/solana?ref=JLgg88TpNpBauEZZA724WGztESupWRdR1KzgVrCmE2U7iR9HYXjMjUpbQbyL",
"https://www.pond0x.com/swap/solana?ref=NtzoYJ15uXQiegE49u7h1aVpPhBhSspgUmqmTXKK6kQTV2n6EQVTF3JpA7EJ",
"https://www.pond0x.com/swap/solana?ref=KLW3HcTYmZaWiA3YQWcLo5YoYTxhZ1FFtEtYGcDvUF182Jghn83xjCGFzx3s",
"https://www.pond0x.com/swap/solana?ref=PtbT6zRycNsYTBkuekhdiqVRTm5rbQC6hvUx7tarFLfN2uFMX6yFTP34qA84",
"https://www.pond0x.com/swap/solana?ref=NXdRZeX9p6foEQTYcJptTkKfrxpbaqe4v1ekYRVNiRnitfm73aedmdtwRouR",
"https://www.pond0x.com/swap/solana?ref=NH2zvd4k32hhNzegCG8nq4tcP2qUwLTK3juLgKcUqhD7CeKQr7YaqWPSKUnP",
"https://www.pond0x.com/swap/solana?ref=PaZ87oKE6Bds9RkA4WjaE6rzmrTDFegGFXULDs4E988wdAtAGvCgwirxCnyx",
"https://www.pond0x.com/swap/solana?ref=Jhuf2L4hydYdWkTpJQmqWHL7pkH2hQVDXHhCsKVaREpLxqmLw998mSUGUPNu",
"https://www.pond0x.com/swap/solana?ref=Hfeo6i42MwFtr9Af1PG8fFwWNfatFrdabM65dKpQAqknEN98CsAthSGbEGRd",
"https://www.pond0x.com/swap/solana?ref=PYiYUaXoLmrBygPJDxhvqM485n7VEDdf2vTbPRt9ExTyuc2N6XDef8AXFCGF",
"https://www.pond0x.com/swap/solana?ref=QBcrVBGLqkG5mL6J9zFES9zk3Ss5teT4eYiB3cw77tQSPsjMXm276Fyi26kd",
"https://www.pond0x.com/swap/solana?ref=HgpdrJm49AHcbapvVDX5ZSBdyQDq1wGzc1ew2pC5NEy9D3yZFyeKCrFUdeZA",
"https://www.pond0x.com/swap/solana?ref=J3DxQ3LHNWbprWGBArrPEJxt1GJanLHmTZ3n5NXXMKqDe4bWRQsSSk4aoLFp",
"https://www.pond0x.com/swap/solana?ref=Ps3pCiNNx5PAND495vcWiW4dbGAz2TJvWDM3RLm7SemeU4nKLdn6yYmSPb2a",
"https://www.pond0x.com/swap/solana?ref=QUUSNPCuSSUqShcwyT58pfrqzyw79TiVpVyBU2JQH8pz15Z6Tcwa8rkDoiJZ",
"https://www.pond0x.com/swap/solana?ref=R9XSBTE2cyLJoPj8vmRnWG63fsbtPLuPorBtcMd4TsPeQZoe6asKnx6dsSwy",
"https://www.pond0x.com/swap/solana?ref=NHC1ZGrgwJ8XaL9PJfBxQc9qz857yLA9scSnMRGtntes7BGz3LG3hP9x3TCC",
"https://www.pond0x.com/swap/solana?ref=HQYCNMsdhCrYmM4jxEthKTxHBdq1NuXULqxmEcuj2Zes96TfeWKCpnjkQkcs",
"https://www.pond0x.com/swap/solana?ref=PD7vQoaQQS6e13LJL32UxKn6pJNFmcejghDU1gVVrs4sszvpCtS88jYgCFSX",
"https://www.pond0x.com/swap/solana?ref=HMpbe211u4uAu9TseyYhBC9ZYdkMMuaqGpZMLYTPFf9sQvDvqHpgBJXYWoxJ",
"https://www.pond0x.com/swap/solana?ref=KJ1FBXmU8yVqtca4eBKYm9oLuzzjakSnAjwjohgSUk1fjLFrXvntMgtwWMSp",
"https://www.pond0x.com/swap/solana?ref=NrhqQ9VY2R5UtVpc68ArBhLe6qdhp8Deo7EcJJYB3Q3C19GmaRNzbdzFhVD4",
"https://www.pond0x.com/swap/solana?ref=Nc3zM6g2idmmDFEDjXXBf8pxxoUUWWCer51tNPaqR1FWXa9KpfMdStZFYVGT",
"https://www.pond0x.com/swap/solana?ref=Nu4wV4pXQJp84TAh4JDbNMKjxEYEEqGUx7zJMmUHP733djqDqKzn22auBJ96",
"https://www.pond0x.com/swap/solana?ref=KGpzx5DL3o5Mp6PVB47isUrdTG96CAH4a8AM62J9SJSqsJ7w5qFDgmW3djUL",
"https://www.pond0x.com/swap/solana?ref=Jh6RfuxgAeoKF6VRGsmAZmmZBwK6vYhaRZ8BRTy6M6XmAkxuSjqD7armGXzx",
"https://www.pond0x.com/swap/solana?ref=NGcFNbi9xaJEAgAMTuScr5fn4whncNnXRKkMXaWjEDGRnwoU2ux4GzL7wLmq",
"https://www.pond0x.com/swap/solana?ref=PpvJ7RNXEY1figiZ8Y7oY31TnTpyFBv3fCaBB57gbHyfh1NsfG2iNPXT8Uzw",
"https://www.pond0x.com/swap/solana?ref=KHGdrxX6geCLEs9yFPuezD8sAonFPpExykemMfsRBJ6a8PQHLrg1ngAE4F1M",
"https://www.pond0x.com/swap/solana?ref=KdTEmCmbzd8Tn8xgamBWjXxVZB7aeNFFLCNnopsEJyTEHNQZ29ZT5sjcMYuW",
"https://www.pond0x.com/swap/solana?ref=PXF6N3Cv4JPLgnjPe756WFAtrZLFHdRWNqaet71W7s6mguZgzFFLyysmey4a",
"https://www.pond0x.com/swap/solana?ref=HNPxetr4nQfH8PHoL3ywhiVbtjByAvR9z9rBVpGVh9BD1P7fHSGFqgrxKorp",
"https://www.pond0x.com/swap/solana?ref=PqsKR6Uxgrj699wq1q5VA3ZGDUnR9xT1ZirDo3QYh3HmSF6vi4KFLifyTieb",
"https://www.pond0x.com/swap/solana?ref=JN1KyS3P3MiAcootyVc3GXAUvbv7usWrnaM83ghDPiG5mTN883sMuWQftR1F",
"https://www.pond0x.com/swap/solana?ref=J47BH3o6bZeG3v3if6E6azppKPaHwKbBXhrB1NwhYTFubbzi2HZFTe1KYJHp",
"https://www.pond0x.com/swap/solana?ref=NcZXtb8bHeXDKYQ41qbLXWcpdpeHJkRnoyP6xhMDWyVf4Fygq9vb9d8PQRGS",
"https://www.pond0x.com/swap/solana?ref=Jgf7CBmVngwerBfxvsoWdP7FxRzFMH3eAZdgAXqAoJ1DGVQQkNYWBi9CbEZb",
"https://www.pond0x.com/swap/solana?ref=JhE8rtjhgWsPFP2bADEvmo1hSeVnJytTp34YzGUfVegMY8N8n16yFVwwsuvr",
"https://www.pond0x.com/swap/solana?ref=K38w4fDBL9Ts4Dm5ZjtVdThJTNa3BHLpqKiYWaPvCxtWJx4iz8Dd4UNqvjMp",
"https://www.pond0x.com/swap/solana?ref=KgUxXjr7pzTkDe3obcBJBH1xPFYf3KXVDawSAigMuLjNAi92qy3vW3mEUzD9",
"https://www.pond0x.com/swap/solana?ref=NEJpJPJ7uyNxcwbaSFcwSKsoqsLQrCwYVSsrUCN8E8RhRwtdwGjAShRMkZBJ",
"https://www.pond0x.com/swap/solana?ref=QBcNMiBZDZmLiSW5G21Aa9H8jKRhc3d4APdDCfw4rLk5QdoVvLPRBcdG6w96",
"https://www.pond0x.com/swap/solana?ref=Kf92yEZvrR1ZcQ399H1R6uhM1djhF6767ytuvJJvYRxVGDZnr84q4qWSnLic",
"https://www.pond0x.com/swap/solana?ref=PFQWyWurevNDVh1DhARZYkw8s9Af2r3ZYAeX7vUkD4r5fZ9Sn9UUC9kHMLv6",
"https://www.pond0x.com/swap/solana?ref=JzQEPUjP4Cc5JT1e7C5uEsT2FDEvRZAvYERDdHhfA8eniWAVGbgRNFd8mi4x",
"https://www.pond0x.com/swap/solana?ref=JKicZ67VKpcD2MSYsdvNDm2jFPx9dHrdY3JFa9EXPH8u4wvBS7AtpnfV8aRB",
"https://www.pond0x.com/swap/solana?ref=K1b8NPFkesJbdBU8C1FTuJF7K4np36WXcF2VctFLbKMkA7oczjDrPuifb346",
"https://www.pond0x.com/swap/solana?ref=JySXJtKtuxKHbd94USe4Z6gPDNYpegw3gfEY1q8Yg5PDvqtGn3nCoFpQWHQN",
"https://www.pond0x.com/swap/solana?ref=NGJGz5bZQCB3SdRhc6kwEE64fxGNyL7Cpbw2PzFcAUXfPF32tHzxDD5uRpBH",
"https://www.pond0x.com/swap/solana?ref=NGKFxcxH9PdsFtQRAHsakaLaEMXLpnAVyUXDfg33Me9VEwwF3dit4WxKALz4",
"https://www.pond0x.com/swap/solana?ref=NtqNZy6JD1uFgYhtMGzrNd1L4JpZkNQfuE49QzNXhz3kRDGM3hvLFBaQVdQM",
"https://www.pond0x.com/swap/solana?ref=PEoct6p6D87eoAnoULHMifR7HKepA8GQtiCbJ5CaHPcYGPvy5oBbHDbF2s5U",
"https://www.pond0x.com/swap/solana?ref=NGXvmdDfpGV5E9XAfJCnFBfobXQBiSu6DVpDcQVs5hRL1T68aAnsb2xRXVp6",
"https://www.pond0x.com/swap/solana?ref=J3DnfwvNkPHdjWH9xnmSDx8SDQ7XeSy6ufjdVGzdXaPok2329upXpAPkqnBm",
"https://www.pond0x.com/swap/solana?ref=HQ2FtMXjSpoRMPyDDq1db3TdaxGgs3MXCYLxtGiYhGtExPx9sYiGP3GfJqSN",
"https://www.pond0x.com/swap/solana?ref=NvybKHMJEwzk434AdWjF4mcqypeZjqztC6nNmf88sbFZrzEPGEpZsMXAmNKT",
"https://www.pond0x.com/swap/solana?ref=JhyNsgrdYJnD4PPemrW4T3z5jzTwfvLPniyizo1gEyVq8fVw8W4Zyct4fGos",
"https://www.pond0x.com/swap/solana?ref=HN2amnxTbV3vnJ1npYMWd3dyjG65mnfrzTpt3BQbSgM7W8Uhfsb15iPGv4Cb",
"https://www.pond0x.com/swap/solana?ref=KM71QsrBSxzFzVVoSfzKV9deMS1PQHo5JJbZmxob987Su7XKFHam37cvfEue",
"https://www.pond0x.com/swap/solana?ref=KbYoRPfa1SsPGDksc9wBhruuNemNegnPfnbd65tHjcAwaZ7Zqzucjh6ituQe",
"https://www.pond0x.com/swap/solana?ref=NHiLSw8AUypkqnfWaBTofYXGX1KWfrKNgJArxDzGPVeFWEP6quy8odc5R4Es",
"https://www.pond0x.com/swap/solana?ref=Nu4GkDXCdQaCSwypGYUxPcWoKqrKqeuEvDXruvoG6oPdZkfqy5vRa7vDyVHd",
"https://www.pond0x.com/swap/solana?ref=JM4Z2U4X9Yv9PRUC6h71Usp4iQxHxrVWmftSwpwoYPrHzPakkfgvYaiL6S2n",
"https://www.pond0x.com/swap/solana?ref=QDKJQmVm5AH9X9HtBmyYjJFPXs45cXxSj1hKmjd2P7W2yfZhZzSu26UZVLu2",
"https://www.pond0x.com/swap/solana?ref=7bF4zHWyVCK4mzagXT34rn4xu696QevYgt9hsExWTTKmHvSHGgTekRB6Ha2",
"https://www.pond0x.com/swap/solana?ref=QYyVk3J6nW4Tzzh32ewLdzHEzUx3ucdUACcFzs4cmMiX9k7NJwkJ4c8QEhRz",
"https://www.pond0x.com/swap/solana?ref=PuvkrrpZB95cohFTsHPrFjxnkpE2sDAAJueSknmvVsabRjuXZ2XzZ2Wkfwq1",
"https://www.pond0x.com/swap/solana?ref=KKQ1NQkG8srjkyc6pc6SKfFJ4omv8GPGHKVhUBQH9apseZp9pQt3FeKHaW3i",
"https://www.pond0x.com/swap/solana?ref=Jzn3VG885uDtiZSbgj95j766a7L5kRBjQaehqjUcoBMGEKqVvmoQ4F9H98hj",
"https://www.pond0x.com/swap/solana?ref=QVscpMybDQGBeQNn49SGU4wDmUi633tXE9T4iLY2eaMVS2D73AHNyNpruBEQ",
"https://www.pond0x.com/swap/solana?ref=HgyjcVoZ8KVzjVEZzobtpDK25xMWdRvsVE2sFsX7EUiRfoqYZ7WpqWypWZU1",
"https://www.pond0x.com/swap/solana?ref=K2P4AvyZFsFSXgNZdr1BeYXWwZLCNxPoBN1wDcvoEH4kkV3mnqyaEvXqYxwX",
"https://www.pond0x.com/swap/solana?ref=NrBdUV1EoVyooaGcrGgzNVptHfYC5y39sAfedDrKDi5gW9iXetrhWtqvqtKU",
"https://www.pond0x.com/swap/solana?ref=JhAhUSm4Y8rzTt2kKWhbJZXoAbiYiGG81YR8hLNTCY9mpKMXKqDXxRgpU4kV",
"https://www.pond0x.com/swap/solana?ref=HhR6z5ox1ALK86s9uF7y1FSTeSfakgFSQw7vYeD7upSEzvB85zRUEhQhL3kC",
"https://www.pond0x.com/swap/solana?ref=NXFk9kAM1Yk7qMXQQd3n8978uMeZLQQWSWyAVN9zGQFzPrXgHMUUnBoUZgj1",
"https://www.pond0x.com/swap/solana?ref=PVv8mwNuB6a3W3EJzwqJM6NB99q6kkkn2UNnenVQgy9kjKVTADaQW32HFgcp",
"https://www.pond0x.com/swap/solana?ref=K2Q5HsCejr5GZ8WYFNZgTghaL1rzFUdjypZceffi7Svvt2967DetbB64YmeJ",
"https://www.pond0x.com/swap/solana?ref=KJAJcguz8vHV8LEBEokYJ37mLwSPTVQsLysPqRko97yyWNqrwyTamBZ6ysg1",
"https://www.pond0x.com/swap/solana?ref=JNgTyURiVLH2MkrryBDM4Uwm2Q7apuunALCiiEJ5QRQuEWhBifmVSsUvPteQ",
"https://www.pond0x.com/swap/solana?ref=9VDHjEPZzsNqvrsJ4Kw2CtvV4qvAYvCS3GAhJAntcTaKTc2Nmn2uS5C2Zi8",
"https://www.pond0x.com/swap/solana?ref=K2UL1DDAegjmNBrSKsYiq9wjz1Y7JDaSXTEXrcXSmuZvTd43dd6qYF8jWQCK",
"https://www.pond0x.com/swap/solana?ref=KKUq3hmK9r7A1svRw5JENmUEBHnowSvrKLgbf2zTEf6wVQdPqoDxBuBwZktm",
"https://www.pond0x.com/swap/solana?ref=HLwJyF6mb9KUCdtWYc58kwvxfPvx8a9XjGf4GGMjzbZsKCZCvVNy6naTjF8t",
"https://www.pond0x.com/swap/solana?ref=PtSWNe9EMZt1Mz3K9oV6x3ZVDkodswHVLep6yNn1WRzv6wpyy3v5488m1T6q",
"https://www.pond0x.com/swap/solana?ref=NGuRSCBNDGeSo9JKtZagRZJtZk2zHFbV3puFVt8JWf2PPSnH8cwPjAfKdnr6",
"https://www.pond0x.com/swap/solana?ref=PFz8jaYckpWfMLJ4omwB7JNn8QktYqwZ2MuXoSswiwLeRVqJ3KkQrXQCukKX",
"https://www.pond0x.com/swap/solana?ref=HLwQpxXNywXVKbd2mRZYzm5mcUyJz82YsHPVPKr8wvT3J9NiCHfprvdvGGdZ",
"https://www.pond0x.com/swap/solana?ref=QDg9effQBkWmoUiSDhEMHGQV3TX4Da3RKE4B7rLrmgJA2xje3mJtiJzpRKxf",
"https://www.pond0x.com/swap/solana?ref=Nw89szgeP5NDX7r16xNrx3nDZrXSEdK9yLXzEq55suTyzJ9ExSDAsq8GcTWx",
"https://www.pond0x.com/swap/solana?ref=JLPUzvL8z3ghLXZ5zpfE5ebqjg9Tqj1RBHreQNLusvLXxMxdMHW4S8SDNqWJ",
"https://www.pond0x.com/swap/solana?ref=PYBnGAAiyQZamRjk6k23d6ViY1hmXKiNYjVTtmee6aHdCdqchw5GHc1woLBR",
"https://www.pond0x.com/swap/solana?ref=HyYzpyynDeYeA8DnNJu7SMyPoE8bPSJ9DmVjfuhmLWYXPYuFmHW72yy8v7Ug",
"https://www.pond0x.com/swap/solana?ref=JNgNFDVS6bthGcGyhdpMZrJKPXgrtBKamfmcNANVDrA2EkU7GJmQei7m9rzU",
"https://www.pond0x.com/swap/solana?ref=KLfc17WAJMCEuSPpZkcYFqNuPCEUDbPW9ojMmmXeaexVRYtMM4X9sDg2114p",
"https://www.pond0x.com/swap/solana?ref=KMzA8bRJoorca1FwJk59HdQsjMYJHxNayRJPHkz1kx8teC56UG2gak981rkH",
"https://www.pond0x.com/swap/solana?ref=J3E5GWyj5hnQYVYdXSjfUM9jFc2TbAj6a6veE2RVins9zszZ8J8EfZmtxZ7q",
"https://www.pond0x.com/swap/solana?ref=6heAvymsunwz8gfmKvjxwCXr8DCJh4CXUkNXAqucqwmdRDRQew2EePuyKYj",
"https://www.pond0x.com/swap/solana?ref=PazvTvPaVaW8a78yM4nWNxFYWcUUg7P7xXcsFVvHmxDseGgDo2XnoBwF3D69",
"https://www.pond0x.com/swap/solana?ref=QUnaaHR2CrdRz7uKMcpFGihp6ec3FSCKFSKbVsgMSfkYZPJV9spT2SkrxPke",
"https://www.pond0x.com/swap/solana?ref=Hh3tcWyY8MJwCZ4nicN6LNHB8pXYBfAupQBeSk2VH3znVskhNVPiMFHj6cMJ",
"https://www.pond0x.com/swap/solana?ref=PFvFzBcLMzbQ3hdHoc6RkVe4oWLifbZKJYraRRzU2X2Nkqi3RZ2VfuVrdXgy",
"https://www.pond0x.com/swap/solana?ref=PDR6aHPybeLVajxjnn6eurF2REGGMeWmhuGsRQJj4Av16MzHcnbnV8kWr7VS",
"https://www.pond0x.com/swap/solana?ref=HMpKCDtvb1AiRQMaNiz8xzLexRBNfyByBwrMe7qWF2586cFz72awBzfR6SiV",
"https://www.pond0x.com/swap/solana?ref=Jf7LQfQtN5acB1xXtoG8aQQ23wwFkiqP1BoJcZx3esaqtcohsqC1XWrWoMC7",
"https://www.pond0x.com/swap/solana?ref=HKysVnZjV4F5m2BSEvpHajFSS2pVtWPW15UjF3bwDiAZwCE8ZsVJeZiKsKpq",
"https://www.pond0x.com/swap/solana?ref=PFFmpxzwknnHZ32JsE1Wrw4Q7pP9kAzuUdw8L8vHRUJdFae1zPoopdMW7cWq",
"https://www.pond0x.com/swap/solana?ref=NcZacWiKSTaq2aTdek1CwKxPLYMbx4SmDDgYZtnqZMoMFyuafT8BpRR3qoDR",
"https://www.pond0x.com/swap/solana?ref=HzRqUe6gsFgDYeFcf9vFg4d6iNU5hwTnfgiimdvtRJHpG6s2zdMdt6azjeeZ",
"https://www.pond0x.com/swap/solana?ref=HgK5oSjFSdqZjQUXz7PvtaB75tVw4c26htmqg1GftRkwy2pBQCtyyqLcgEik",
"https://www.pond0x.com/swap/solana?ref=KJP1Sb7BUAc7k7izHLv1hW69wg3aVomWCqhrZCdU7WUHHGWBhxYJUyfmHmpX",
"https://www.pond0x.com/swap/solana?ref=JJUW1sgGhTpFpcsVknuHH4M5rmnoukjevDP2aBx7DvmXFWSXd9HRWhmg1jEY",
"https://www.pond0x.com/swap/solana?ref=JJ7W8fW6PiJQdWNX2e6PkHZ7xmqgcV8s7rAPJndkohCcXmyRrfSwVfAtVxTh",
"https://www.pond0x.com/swap/solana?ref=PFgURGPby7pwhNEJ8GAcv8vnJ46fouF4RtTiFaR3YgrG1FoB72Ca1p56EH36",
"https://www.pond0x.com/swap/solana?ref=QZiEgaxejVUcQPBUQY2PT5ePNwBrtFPSUb3u8fN6VGkHfbkwiLUcbcPVcCTk",
"https://www.pond0x.com/swap/solana?ref=JMnK2ACCbGb1dHC93zzrcpF6UTyUHm1VqKHzToBo3hijbyeQ95pSY4WVhrUL",
"https://www.pond0x.com/swap/solana?ref=PDzyZH2GhkUccwXY86N3ghRHvZm55oPj4ekRdRhcR7imM2BQ5bcUPWtTDUTh",
"https://www.pond0x.com/swap/solana?ref=PsQzLGHrJJAE3DoFc3oheQnVZDEZNsGtZh2xLGaqWEvCh33eoudaLLCM3Eys",
"https://www.pond0x.com/swap/solana?ref=PFh4NVruawVzwxL9oD9Jw3d1uEHp5e7GcHGS7q1DKeyTFyNrCxAJrQzK5Mv5",
"https://www.pond0x.com/swap/solana?ref=HjApj5WjeoP3ULcFqZQz7otQk1GXmy4n3GaihStzgZL3Lqx3p5G1PqJqAr37",
"https://www.pond0x.com/swap/solana?ref=JPM6phnJ7cf1czjF64eDck5dJAR5ScapWMRMzJThttefbCyaBnyKLwgDZKts",
"https://www.pond0x.com/swap/solana?ref=KJHvEoyhecAiifZ92qsYucwKQB3LNAigd1tg7YW4zL7QMpQWZmZ9GXNVRcHU",
"https://www.pond0x.com/swap/solana?ref=HhCNJvebxVTkAdbk59nUdGwzQnqYS11NQgfmNaSrCV1aLSmNAVa3fLWVHsQ6",
"https://www.pond0x.com/swap/solana?ref=PZfyxJDVeGSDHmX2JwrEuqKGn3MUVD9jt2yhhWronBA9QF9B3LfE4ogzgnkW",
"https://www.pond0x.com/swap/solana?ref=PsCh2U5HuNBNDLabQEQ7x1CkFUNAyLeusMdizt3Gx4QLZLiC16Bh5V3jtbep",
"https://www.pond0x.com/swap/solana?ref=KgAneUJd2a2Dzd21z2EhEqDbsqvUpGU97BS2kMNvpy1sSkyva1TRPxMX7y3H",
"https://www.pond0x.com/swap/solana?ref=JNY7sfNMK6AWAuNwHBs2pwuQZxE4Ct6iZUVTcwZbPaLfPtVxPK32BJhJSEB9",
"https://www.pond0x.com/swap/solana?ref=Q9hxy3SyX1G8WYBRgziVqhrEfmpj3q3yWjnKLq38Yoo1uazBzg4dSc57MBHW",
"https://www.pond0x.com/swap/solana?ref=PCq2p5gkYMcopGg9d7V2T1UnNHb6eqPYhWgYwAU7Eng8V9MxDumqVkVouPqD",
"https://www.pond0x.com/swap/solana?ref=JdLE6AiR1LQmtAaMxjwX4gGXGu7xmCFHohJtv2UThYmVW7wbfRyYPqzVvsML",
"https://www.pond0x.com/swap/solana?ref=KMr3uBHAVKMEYFSABb9wBwy6T2nvDWx57JisXZmnYR8Y58c9Z2ALCoUSGM4C",
"https://www.pond0x.com/swap/solana?ref=HMX59hie8yJb7jLPSZWozRDH2eP9U7VRRfswE9ozcCyMbHmHK3NKbej1sZit",
"https://www.pond0x.com/swap/solana?ref=PCXj5wnwEy7Aj4xKjvRXwuPVa6Dh6Qd7WDzs8wN6FHm1REGoie9c3tmtUbuW",
"https://www.pond0x.com/swap/solana?ref=QYTzPoNWrh5vG91ycE69n4XRiqGtVPot7ddqM9QB98ZEyKYPdKU3vqmB4WAH",
"https://www.pond0x.com/swap/solana?ref=NHYvTehRTi3aNd5R4BrEHLg5HokUCWymRfgp3B4kTDMDpdfhxjuyHuMo69AY",
"https://www.pond0x.com/swap/solana?ref=KbzBmKg3i1YBxPbUpga3FTMZ2GPfW3ZxedExAFtA2ta1AzHBJc5g9KDqUzTj",
"https://www.pond0x.com/swap/solana?ref=6grgRcRiMQguUESbNHK5wDfegVZsnWFnhaXYaUBasugCpVvgCDi5E7nKDKH",
"https://www.pond0x.com/swap/solana?ref=KLMZkQudGCHH7yyHcmHGpMGgKvq1cgR1MRRnNqX5P97Ba8QNrsZ2MifLEc1d",
"https://www.pond0x.com/swap/solana?ref=J3ATF8egeUTLBF3pTLFFVFUVCuRETKCxVQpok1N4aKpmVbNGpbEGiV6Tix1K",
"https://www.pond0x.com/swap/solana?ref=KJ68jCvthDxm4MftChDJXUN3AooYhzUvNhQYu6Wv6CsmTCEa8KbNnCsAWeCn",
"https://www.pond0x.com/swap/solana?ref=PZbiMfsvu75Vd32z7wzveYu4zpMh6xUdmVUDXJ6rmGgqqWwgTXdqGBaFjo9A",
"https://www.pond0x.com/swap/solana?ref=PDFTwAiv9ErTUaGowZcScjQEsvXeoPRG7jCi6CzA4gvwYQcMoBQAG5ZNHZxK",
"https://www.pond0x.com/swap/solana?ref=7WikyxNBrSDLuuyT2Q4oiEmhtkPFy3b3XnkfSv66BAVSFn88dSYsadxp8y6",
"https://www.pond0x.com/swap/solana?ref=PVuVH19NRegeM5rQK3epPdCrgEJaRhL5uc8uMeq3Duw2ooEQbH8adEaAJis6",
"https://www.pond0x.com/swap/solana?ref=QWmRDjbGZaRLEEZswdM5F7VQAwcvpqLdZ8jGycZGVcZqbiDWGYmEZQy67YuH",
"https://www.pond0x.com/swap/solana?ref=KJayRum4EfTAyFdpM2XGSKCvbwpF3scPkTkwS1uKqbRy228H2HGkoY3DuiCc",
"https://www.pond0x.com/swap/solana?ref=QE8FR7KZjk9xwXvpzM7hdzDgRtUdVX8qA67KL8wvtgyFYCF5Gcx1iDk4jMxB",
"https://www.pond0x.com/swap/solana?ref=NXGSjrmrCgHg4g9btwqEk8QwzcdguTiKpyXjbNd9EGV8cJMT8HwKeRxjWaMT",
"https://www.pond0x.com/swap/solana?ref=Kfp77bFgADnpEYWAjgBadetdWLzHYBzXx5fa1oZHvFs8rjvHKT3xXgwaCJ7q",
"https://www.pond0x.com/swap/solana?ref=KGpSFVPPnvQSdhzXfSc3gpuJVdSzJ4qkdqaFEuDR38bBaqZP8gLFNd3z592U",
"https://www.pond0x.com/swap/solana?ref=HyKSwmyC6kHRbsFjQK4rXvhJoA9SowJRXy7DXUCoHxYWYMjxPf4tYuKjxX1z",
"https://www.pond0x.com/swap/solana?ref=NZmKve1eL7rpFgqG9HSk1xVpWBj9HKdz2D4E7ySoQimq4JUok41fu4MW9ASP",
"https://www.pond0x.com/swap/solana?ref=KbzAq9jBCnRZgGYXuYovtQ6HDuja97nPYmcuX8q1UyUouWG7kVMjVZnsigQY",
"https://www.pond0x.com/swap/solana?ref=K1f4gz7JhyTkSqiKnVFt2w6Kb8Z81BVkRMaX4vTSsH6T5yAe92b2kQWCRFG5",
"https://www.pond0x.com/swap/solana?ref=KGura5hwmiYJxzXTHy2beZBW74HYYAWTrdgnwJFsPUPpA92UpPAn12Wor7tT",
"https://www.pond0x.com/swap/solana?ref=NaHgjkyXayT7BYWeFExJAXccgZuHZZFKajrr36d6QQVPh3vLVavYMBorAbDF",
"https://www.pond0x.com/swap/solana?ref=NGttX8aVD3WCPN4iqgC6uVjC818nmWu7Aa8aVX7YpkRzLj9VMEbjXBtWbWju",
"https://www.pond0x.com/swap/solana?ref=PuhtZnsepZ7MMkCJtuLFCB1F4nJdcpBnepX8vczgBSkuKfJpBvC3dShk75v8",
"https://www.pond0x.com/swap/solana?ref=PFAqRz2WHYbp93ZU1rdP1y4tQ7iYsL9gTv9nmtvnp5sTQkWJdDfGPznCkfTs",
"https://www.pond0x.com/swap/solana?ref=HhM7Uc1n5zjHNTxEAvS53q3pGtDoeZdefxsqdV5jKcvXAAShg79rxGVTvtod",
"https://www.pond0x.com/swap/solana?ref=PpmHHQ54vtsESfAR51JEqwWk2HrQb6sozZsE2egtFugDof9RtEKhoFoPj3gL",
"https://www.pond0x.com/swap/solana?ref=PFgVKTtMpUUreMvvA97bcvg57Ho63F7FW34Z5o9BMRxGbwzMkFCuGyJgLsyp",
"https://www.pond0x.com/swap/solana?ref=J1ywXa2GBjENa7H5QQSyy42kN6SLtVFKtiucj3ZH9T46r5oX8EnKmxLcRqK1",
"https://www.pond0x.com/swap/solana?ref=HQhMmqVXE9RFaHFiEhwSNstyXyFJX3crxFSFHtzmaHhTRCLKCYBK2gVb8wbL",
"https://www.pond0x.com/swap/solana?ref=HyhJsLL1SktmE2xLff6GjMJsgri5wDMQAN8ztrjyBFfwF8x3mLjPDtMJXYhD",
"https://www.pond0x.com/swap/solana?ref=KeVcmRapCQrZh6F9TeYGTTMFPbu3d3Qz7qsTnhDqYVe2MmNQiHL6Mp6tq5de",
"https://www.pond0x.com/swap/solana?ref=PCc7cpV7s9wB5YtbrjBipnnDvsk5SxFXjKWwbP4yAMuUFiWyjc1gjei8m4tZ",
"https://www.pond0x.com/swap/solana?ref=Ke7ErVJs8ChetnRiMRpujEGkPUAScqy89cyR5Wcosunb6LTZzWoGKsHZqbVh",
"https://www.pond0x.com/swap/solana?ref=Jh2TGWySXRqBvVHv2oyvVi4WL7VrNF3MVLaNZh1Kq7GGvxMwtFuWXcXkS6GP",
"https://www.pond0x.com/swap/solana?ref=NawkignqZ67WdpUhjW8KQtTvWdZBrqs1QSSaDjcsYfphvwCVXxpbK11j8yMn",
"https://www.pond0x.com/swap/solana?ref=NsWRD4Mqk9CqhRWeixhMcCMJpikFME8h51gFKMvcoCHaHPEz6RGd3pA5Yi1G",
"https://www.pond0x.com/swap/solana?ref=Jzr9nN97GGKiehvXoqkV46kRXXa57AZXbKzPzS1BTZEnashNwLN6qeCooWzC",
"https://www.pond0x.com/swap/solana?ref=QD9jspwvCTBQnsKMXiXfZc3GXHX8s5STaaQiDeSb268PbYYb5mCtTEDEg5Au",
"https://www.pond0x.com/swap/solana?ref=PGN3e88kVRVs4bNAQLJ29DquXQoAE3zRrdrZiNQZaERFG3LfdubbRoKtBGaW",
"https://www.pond0x.com/swap/solana?ref=Naomn6zGqoWG9gRK76V6jRdNB785R4H5odhKu6gK3m5sKM6jCx4MrKFDGXU5",
"https://www.pond0x.com/swap/solana?ref=Nb2LhPsebAyG3F6mp9455RSPzzKHKLZAiZcQw3KhztK4AkSKNYH6RmKpyuAF",
"https://www.pond0x.com/swap/solana?ref=NtdQTRmQuGYWpRXbFXUG7LdqMnMgnAzhJimHrxaNyGWJDGuSvniguohiMQ5e",
"https://www.pond0x.com/swap/solana?ref=KKBa4zxSH34RPU3Nz1WQpXVSrn4teCMJX1xakFsACPza9D8qfgpwDR1Kq2f4",
"https://www.pond0x.com/swap/solana?ref=QVx3KGHWNjuYH7iWo8AVHwdsTJebNtooBRHz2QQtqM3eZMaCcVoWg4CqGYGp",
"https://www.pond0x.com/swap/solana?ref=HKpkmZxjCZNgJCdhn7b7VY4SRSYEfEandkMisLWQ3NcRwG3aFbcYRUfv8pbL",
"https://www.pond0x.com/swap/solana?ref=JhgmiJ92KMagV51hisx7FtuPq4xPLx5oQ1niuShaXEtuy9GjpCw2FjDiG1eF",
"https://www.pond0x.com/swap/solana?ref=HQpyLQ9Mi3uV7BvvJMGZn4KVNDxDtp3cRaiv66sABTttqpP11RgGz3zW7FA1",
"https://www.pond0x.com/swap/solana?ref=HM1amysuHJaCNNCPbX3zLRaiSjLf1K5AUub4oWtF5XawscdcPJuhyxjwfwRD",
"https://www.pond0x.com/swap/solana?ref=R88gzHVLyPMfriwAGk3Swe9KvAfsc8njR5smgQnkzr7v6DMmxHn61Em4z8wi",
"https://www.pond0x.com/swap/solana?ref=PsGM9xkxas6WhyG9MfNppxAtjmYraD198CigNDNFKLTqEc3Cm5QbfTWLaN7A",
"https://www.pond0x.com/swap/solana?ref=K1Ryof7QjDCUMdBDY8MhcaWKKQYGEmCPhXojAUKPGx9KhtzG5x6RmHwzUEcV",
"https://www.pond0x.com/swap/solana?ref=JdZiNMzAxeeLeJoQD2DkPepmAPm3tQMQxeM8ry3RaRrEQ96G2WAxBWaanKDs",
"https://www.pond0x.com/swap/solana?ref=Kg7YnxnfzgVDFqwjiGfva9k6HWb3xrSRShA2LS1ppSxaBfmRJqkodyRiz6PA",
"https://www.pond0x.com/swap/solana?ref=J3XgY37qmuxsPG8vzR6mf5bcGonLdBK1dzicszufLi9UXUYjLwotNoZVyZio",
"https://www.pond0x.com/swap/solana?ref=8v23tpjs4rtUmwTHnKvVqrP9KVnQj3moiaYwCFQEc8JVokwMnETKjRtScNt",
"https://www.pond0x.com/swap/solana?ref=Ke3ZmGFTtsp3TNgCpctRQowsLVotXYxP63LvQyE42N5YignNdoQevhrNpBYp",
"https://www.pond0x.com/swap/solana?ref=NrdFJdCUjyg7GGXyG9mKayssK1aVAt6NGCoESkVLrWF9BxGCsbSz1odGfovF",
"https://www.pond0x.com/swap/solana?ref=JhTaAzBxAA82w1UfeaSF36mWu1WEJxDS4idmBG8iGv2LYHrBKzb12j3MPZ5U",
"https://www.pond0x.com/swap/solana?ref=NbJpD8PzGTbLaNHa6UnfyUpphe5nvY1a8ivu8ZA8e72g16UEj6b1WfVodPdt",
"https://www.pond0x.com/swap/solana?ref=KLSkqRQTyqXa1o9ukcigjqGH8HG6UroPGRDH7Hzix4p1ebSytkiM9nygmVyy",
"https://www.pond0x.com/swap/solana?ref=PXNwCAsdKgUhRF67FiPXkwBF9yjCksjBCoTmB1vUaqcKkEiTCKdVYgg8RVtS",
"https://www.pond0x.com/swap/solana?ref=QX55ZnfBqrYfhwrFJC4LQ24UWdaFFjjfE5WDwtTZb3HT8MfFx7ycWLPdyTMr",
"https://www.pond0x.com/swap/solana?ref=NGxgAeeuZkYjWz9g5KCjR4MKESS53HDZkTqhm7uDUrjB9T4faGoFrVWmHuEQ",
"https://www.pond0x.com/swap/solana?ref=QUZ1ZjQ6yZA8MspFPNAP3d3eFLWkW2GN1WfFvjZX4P5bUEHsN9fSp8LEHqFA",
"https://www.pond0x.com/swap/solana?ref=PrcWiQhStKn7V1V9enNUzU8Aup57GRABuHdMx9HCyez4xxXYqw5W4Dg1vnXG",
"https://www.pond0x.com/swap/solana?ref=HzZp4d2TLS1T1h5Faf5DTA4hc9nr36ULWYNngQ2PsZ1vkoczsXtUrA7rDt4H",
"https://www.pond0x.com/swap/solana?ref=R88EpdEUokJnatuNivPtSTMr3DJBAG33JuACpEGngcys3R72UzusEuWHGrxf",
"https://www.pond0x.com/swap/solana?ref=PtfYKBzV4q3WjqrzD59F5SvvPf5wiT92GkYidP1nnPCMog4TxxDefhoAdjCY",
"https://www.pond0x.com/swap/solana?ref=PsRhEHBqTc8UDcbyh89Rv21TJZxAvraq973ZwHdohiW7jdfdWDD4oFbJDUSo",
"https://www.pond0x.com/swap/solana?ref=Ji3wHB58mStpPjjfB8mCSxJMWgFsH4YkGH3zgvdYxVzbixp2pT62bNgwAW92",
"https://www.pond0x.com/swap/solana?ref=Hg6AXYaDTb4Vr5hLhpQWWGnXnBFP8HGjPfwuaA1Aefz3k7wTkamuS9FvtMqw",
"https://www.pond0x.com/swap/solana?ref=NE26MJnYCwk5TotXGVqqPPVVABuAE519KAxudrhiiZyLcUHf9jLDqwLa7yKY",
"https://www.pond0x.com/swap/solana?ref=PCJNZKXJ9E68bNP51vRkEaso5dYbAWZmyHoHf5VS8QiXFqyaJzs6yxTfPHPf",
"https://www.pond0x.com/swap/solana?ref=J1JTCV6mjuCd46HqYfB25BQRTNxj63j2ENKyraRSAXWuYMmQFpXQpAd5JVAs",
"https://www.pond0x.com/swap/solana?ref=NGy2TvSEzqybryjZ7PCcoVKUmDFX4BUymUkuC2JEbhNn1YiWt4yVJytwdGSG",
"https://www.pond0x.com/swap/solana?ref=KeGv7r2PYQnk3Y2UP7KbTwjBb7HstGmWafrMo3QG7V4hQiFpcDdhbwB915Li",
"https://www.pond0x.com/swap/solana?ref=Pq8B8ZQpCiwA8WK3YqP7U3m7nnt6FTdJ1677M49EcK1w86QVcVdq5xx5Vo5R",
"https://www.pond0x.com/swap/solana?ref=JN5co7ToifpdW9mhYsNE1dpFRyT77ExLufCNBdNEracYygcPd722FBbSNqcH",
"https://www.pond0x.com/swap/solana?ref=NXRDtc76fLz18DZzF2hQU3gXY8K1dNLPXuGv8q7MUx3d4KWmeyq8iNLMZ8Bq",
"https://www.pond0x.com/swap/solana?ref=HN7tVSb9WsZts5yo5G6EEnoTpJqn9H8VSrwLh4dB7nCpi2tFKb93ayjcnU8Q",
"https://www.pond0x.com/swap/solana?ref=PtkXqkcAd2xYQ3RXyXAPfxBDjm6uUTVAH34NQP96PwNTSGX2wFEZ6vqqjF1D",
"https://www.pond0x.com/swap/solana?ref=KJkdsDpT2ekkdjLN3FshHwTdk4JavCixVBNdxD8f1qmh4FU2hzphx1z38QCt",
"https://www.pond0x.com/swap/solana?ref=KJxRS8ZwAi88VcHvtVcLq8RPBTuW76byN4wnzbSCsaCNHjJ2mVMNpLSoo325",
"https://www.pond0x.com/swap/solana?ref=JhuCosb8d5UT1f6KZeq9ByrbudnRnk1Ts8ohYiib2jCFQWH2tXJcziJyAc6E",
"https://www.pond0x.com/swap/solana?ref=JfgtyMsYt84Y9coKB1p7ZTxTfxf856WfW8swVTNJFS88xCbTajenS1jX1pKa",
"https://www.pond0x.com/swap/solana?ref=Nvv7rgPYrAHJUqXeBx3tiFcRwq65mcrkjEtYoeHi3ZFr9PhzKEpMKbevLwpa",
"https://www.pond0x.com/swap/solana?ref=KfNDnSiSrJY7AuuD79b2y1uwhhZPU3cTRnfetERxsH1wa8iazji1LYSHgECd",
"https://www.pond0x.com/swap/solana?ref=PtEcGKYkvebYr4LvGX92vwPBr9F8TRwGC5LeP2Lw4wwVFAgHa7UYpancRsVa",
"https://www.pond0x.com/swap/solana?ref=KggiAaqaiEVCXkd3yjMSNWLhkH8qnSjSdaJCbFL2a1b2fi2ovWgNEeUAHmsT",
"https://www.pond0x.com/swap/solana?ref=PD3fSWdXdhiitJKyqLgeo7oy18RMxuovGHxLzMEiYYvg97G32AxrNniHX2vm",
"https://www.pond0x.com/swap/solana?ref=HydKaa5noC9cT6gb1tJUFsQXnbDn2D1ny1Atp96ZHL5R5KWdkYmUQKAGUodD",
"https://www.pond0x.com/swap/solana?ref=6mCQcZW2v6UsowMdftovskZKZ4yfgTomSoGxWqZRQvAXKsX8SNQJBt1jEmA",
"https://www.pond0x.com/swap/solana?ref=PrXd8N699ZNoz75ctfdADFcU6RExdRjSRAzxhQ9NPzz4ZyZkgDWNxHr8iugd",
"https://www.pond0x.com/swap/solana?ref=Jd3QJyMBF2pm4iskCjkdX7tUXxF1YBjh85mGEgMfUrSfAQMiCHQsb9itQ3oo",
"https://www.pond0x.com/swap/solana?ref=PYmyv69W4s3KEmXMzC5VKqqf89wWXPuU7ThR11D6k3BdWHLx4A3u1XWVznN6",
"https://www.pond0x.com/swap/solana?ref=PW3fPSZjfCEAomRQXW6mWrxLupgoot2EB566TukpmHLNySSMFD46NLbZg2Vo",
"https://www.pond0x.com/swap/solana?ref=NcGTRZiaB1k43D5n6BPDfEBi7BZQfSPt592HKWjDVt3HsoxCqudWo8LSQXwg",
"https://www.pond0x.com/swap/solana?ref=KMTbwocQ3s26d6WRb3PquebNQd3iVxo24W81CgowP2zNnme2r5bTjoLor3Km",
"https://www.pond0x.com/swap/solana?ref=JdYeEdvPmAoScjN2rUxXhL4bGDX1UdY4EmRHCdWzp9Dizpmqk7jXJxMddfFG",
"https://www.pond0x.com/swap/solana?ref=PtkCPRiQVULfoSKjGkseqKBb7e6Y3qfWFHHovK3NVybKJ5RWXgDKbt4G7UYM",
"https://www.pond0x.com/swap/solana?ref=QW38XxBPdj9QkeFRm1XAx6AfurceDDmNoyp4Sy87342Q89rHKJEQzkx1s4iG",
"https://www.pond0x.com/swap/solana?ref=KfWtFjJUk97g5SN41WJxLjP7j5ktVKbmLbGjdFsXU2Zw4RY2cx18C9TfW4QR",
"https://www.pond0x.com/swap/solana?ref=PXtueUhtpEavtSMmd4TMEcMYbLcJMLAqD3wpFvMkwxmSwYXHUopgKBhxUcr4",
"https://www.pond0x.com/swap/solana?ref=8XuTex1kxoghKy1pDszeasUfirxnYaTiMDamPMSmSkWVLVP7nKxXJ28aMPa",
"https://www.pond0x.com/swap/solana?ref=QX4xgPxBcTQSajWJgPfg5rFUUiRTJg3rnv7tdXZyuhc5W5ukBGC1kgAhz5wZ",
"https://www.pond0x.com/swap/solana?ref=JyxfT6vNuhJbf4LDJHuQnej55qrS8KhdKzsSWvi4rpV7D7XtHcWpC5rNhiJS",
"https://www.pond0x.com/swap/solana?ref=JgwWsuymfkUi3Xpoe6gNFExP69TcuKQUJ9qJAz84rrr82VoeKvK1Eiyvaf8s",
"https://www.pond0x.com/swap/solana?ref=K22WfdqYJham41VAgwf62KZhYjNF6AQDnKkg4kMnvosuAiCDiArQpXd7aq2p",
"https://www.pond0x.com/swap/solana?ref=J28a64ma4LYi7xkxE4fCr5vfZuo61FuacfL98xBuGe5K3wsgSr3Tcy3Aiko2",
"https://www.pond0x.com/swap/solana?ref=PDLJjASKPzbvXop6G2F8MBE9Yee6GCBxVV7eoNB2k2dmDbPoXeDoMfErBrPh",
"https://www.pond0x.com/swap/solana?ref=PCp5gKvgFL9Lm2dtCgkudKrfiyoa9UFxST65toV1jKQpgAKVsQtN3woSTRJx",
"https://www.pond0x.com/swap/solana?ref=KKcmeN42BUMdMnhyKmYDJdo9JTfAYCbkr9XLZTh1Gb8HV6hDk8yip8StdA6v",
"https://www.pond0x.com/swap/solana?ref=NcCBnY91Uwxpv91Z2jJjCry3YqYtsffioTk4LGfRGEaayxw2YoTFDTphTMcX",
"https://www.pond0x.com/swap/solana?ref=JfgjV6Ft497sNC9pwp9R5mK3rCdAak8pzC3USynBEnoLBKHdjiDpbWDpd39J",
"https://www.pond0x.com/swap/solana?ref=R8R9eB6cfq2oFhSTsaYyvySs9m2EpWV7pyCo2K7Tg2GFSD9MkT4x1zzjKcAt",
"https://www.pond0x.com/swap/solana?ref=Jyx5YYsaPP2W8BvxyEQysihDuQB3PvyeVLJreN9TE4kor9XZ3jjsiDJBuP2e",
"https://www.pond0x.com/swap/solana?ref=JKWdRmKx3a9njFQdEQeasfwGZdRxLJmqhv2YbWfkJT7RvEopHxG7Atqx3qMT",
"https://www.pond0x.com/swap/solana?ref=KLJ5LHQsSkC3EKqNiVrphETFrjKcRxHZq2RwEkD3bJnDPv1psVU799R6sNQf",
"https://www.pond0x.com/swap/solana?ref=NtqTSDdJSLWXnFkUwGhdVfZqrP6WqADFXexD2xCFAJ8D971CqdXkWCn9iSVc",
"https://www.pond0x.com/swap/solana?ref=R9bNeAy4ug4XjXm89G4gkCJULGKgxcaBTzYJBhoEPsarWQC9JXX7MHR8FFCa",
"https://www.pond0x.com/swap/solana?ref=NbpwTYETpELhv3Mz7D2zAqhQES6pAxrGQMarB2dpm6GQSFXfwQQWjnUJQDDV",
"https://www.pond0x.com/swap/solana?ref=PFQVzG91dDrrJumHBTt1jCctNYzVkbAaayiz6Ryc851rYdCBorMkDEeenD9P",
"https://www.pond0x.com/swap/solana?ref=PrAPiDMPvy8wgDGf4FYxUcUA84gXur4YVuPurteXFDbm7e9yJyqgtQgdwz9a",
"https://www.pond0x.com/swap/solana?ref=QXRjwyVJtfAHt3CoV7bMCbU6tdkjY5tVLo4ZaiMRBfJDSooXEfdCcxxGDQS4",
"https://www.pond0x.com/swap/solana?ref=Pr6huZ4ZhNr357KSBLxoi6TE8BafW4nn7sGaxEbcoEjwBXKPZYyNRiRYMuRd",
"https://www.pond0x.com/swap/solana?ref=7aD4kiSchRUk8NnyXaiPzUBHD2Hi3g1RSDLsoxDfUD5EgKu98wqfSFbLTxY",
"https://www.pond0x.com/swap/solana?ref=NCPkCbr8vySGpYabw14JxKnQsR4hYUnasTfRRdLsGSjoKHFyipGjxos5wpNf",
"https://www.pond0x.com/swap/solana?ref=QUQZgXBXSGNGiqNqTSBEuZE1vd8pVPp4naR47HkxrAHGhSka5T1ztZEN1UD4",
"https://www.pond0x.com/swap/solana?ref=NGNstWV8Qbgq44YuLHyaMkZMU1AfPPsXc1dLmraAAuEei3xuwdXoaTZWGkAd",
"https://www.pond0x.com/swap/solana?ref=Q9v7cCE9JuuznySCFoLKjZ5L2wKc2ZBQVoZqZtZUKX5nWHPbKF4TZhtuji5X",
"https://www.pond0x.com/swap/solana?ref=HQqjjA2hHuqaa7FTsqR2frKUvVFdCkfVbdn79e1DzC7Vo5kgkVFUwRaof3SN",
"https://www.pond0x.com/swap/solana?ref=QUUdy12vnRnwLajqdN53Lb4xNNbqCCYEhoDgiFaNAF7sW6fr2mCeNRncBV5E",
"https://www.pond0x.com/swap/solana?ref=K1MnrkpuYxUqSaU7UamyMaojZRqydZHws5zK6gjLGhVTX5FVyhGKmSBZ9BYx",
"https://www.pond0x.com/swap/solana?ref=QBgqoTkdGyrdd4JgTSgS9Lm1UtPCVgEn5naM3X3urmHAcxFrawhWzGL5sY9E",
"https://www.pond0x.com/swap/solana?ref=7CpMapPHx5isbjP3A7TLyv9VQAanbiupngz51UGLdr6AFoWZ6DQZ3jnEetX",
"https://www.pond0x.com/swap/solana?ref=Kd2AqbYeJHnWaoAgF7mZNr47RTHwaiGQYHjGvfgsayys3UY9XS5QSPQhG3E2",
"https://www.pond0x.com/swap/solana?ref=JeaeNMP1pnK69LPDvYGRCtkm6cYjy8zq9P26ZyUJKwhGsZ6mcdKpAzB4UYtg",
"https://www.pond0x.com/swap/solana?ref=QZnzYym7TrbqcKBcKfvdoPWUiX7ms2SrNB2fvqL1HmAgZvMFG8BAR4hX7XCq",
"https://www.pond0x.com/swap/solana?ref=HPSMiWQxyLyiyqJEGjxJnpL43mpbg2zsTq6AQsx9zdu5C6aStDNsfVGpjzV9",
"https://www.pond0x.com/swap/solana?ref=JgimMFBMQ3DmC2am53DM9pQempXJB9CxwfcyqmNsm9H5vWYrHVUKiUW5X3fr",
"https://www.pond0x.com/swap/solana?ref=PCfQQ81m3sxgjc8LXVcXYbDT1f2nWDifL7AL7YiGsy8hUtofboomvTwJtcCy",
"https://www.pond0x.com/swap/solana?ref=59dv4GetdWUiJXwrT3iCddQsTPgXzZsSk9YqQd3YNNeNm6FdWbzYPAhQ4Ks",
"https://www.pond0x.com/swap/solana?ref=R9WkNzJcJR1pCtHzZyj4fQmbh21Z3fagRkTB91t9kQf9BXKkVq8uM93CdkWB",
"https://www.pond0x.com/swap/solana?ref=JMnVfH2RGn1aoY1tRaJ2okCsvAwiUMwGZL3NP9bzRyKxUPtFDb4dhd1DoJAC",
"https://www.pond0x.com/swap/solana?ref=NbkEMRyAfDT5wAi5DDLKmxwUQqbTcpUNyMuA2prf35pmYh7asrdpRNnNcPhb",
"https://www.pond0x.com/swap/solana?ref=PtSqjWcZ3GYdP3wrne3SkqrpfR2epUWsYrGqGEbbmBoBdUMQh8Z3Le4HesSu",
"https://www.pond0x.com/swap/solana?ref=PFzZeMwGTPufeeeA13LqKbnGc8BjSTmTbQZRUUfsWwQjqc4X45Vid95CgkA5",
"https://www.pond0x.com/swap/solana?ref=HzssXY6JR7WntTYFgxQZN7zc4AgTYreeQjDBiGDTAVKk61kW5kSY4vsX7LMp",
"https://www.pond0x.com/swap/solana?ref=Ppug3eb96QLnSjwGG1Zf7B4zhpgZxmV8sWieYZ4FV4LrobGT4M3MZFHPrXjq",
"https://www.pond0x.com/swap/solana?ref=PB4H1MzRY2EfWNKwLu1zZ4GYjZC2LRDitB1daxqjJvJyTU4UsSzyKse9d1Vw",
"https://www.pond0x.com/swap/solana?ref=PuR3szCS8x4gWc2JvdMgv87YWk9XQ6p3EhpmMmfyFoCBbNkKfKqUQcevGhsv",
"https://www.pond0x.com/swap/solana?ref=PGGeoYY1bRMDrdqcGLi1Pqh6qiwFxFBoriL8hWKrYYcnG9y2iKPtHrnhQ7AP",
"https://www.pond0x.com/swap/solana?ref=Hh8HDjVJfNCET8HAngfMGGLKpqmatmT7G2cS7qev4Z21Q2HgvtWie2RovGvk",
"https://www.pond0x.com/swap/solana?ref=NCmThLs5smdFEYbW1hkFpsayhe5FqD2YitXpXcRMHstn9qujHDhu1ujBNU2L",
"https://www.pond0x.com/swap/solana?ref=KKBkoDB18Mt6aA4umgFKvP7Es18GmhJ2EenfR4SnfHnYx1iDnYWQUQQ8PyJD",
"https://www.pond0x.com/swap/solana?ref=JNbstqm4YNYEQRNGPVwfuXRUEcuybZwrZUVxhSSXFrzQKaacsuYBAwvE95ta",
"https://www.pond0x.com/swap/solana?ref=KJJfouFYbDTCQEb2PfVaRUBMbfxsback8AvAe4G7Y5zLJCKmCgZsWKBWAMcy",
"https://www.pond0x.com/swap/solana?ref=HKtn1X1GposnAKWFh9B7UayqBnjSc2j3ZxaSsAmyigefF2GdYQtziEvArpxZ",
"https://www.pond0x.com/swap/solana?ref=KgQ2y22cesYznKTCt6mh2fQxLyVKczXdSpT2Hvf1DSssH525uDezBTTuSqxt",
"https://www.pond0x.com/swap/solana?ref=PXA6spgW9JBeF33ibDwA5Vh6RTNdJZMN6pwiq8ds4V7fY3YvQAzAYtrzLKxG",
"https://www.pond0x.com/swap/solana?ref=QXMsGAhLAy9yb2dukq1s2aieZQzpdcQv7wSBwoXjRfuuiX3qXaTcUh3VDduU",
"https://www.pond0x.com/swap/solana?ref=PaGJE2FEwyQitPKCtUkYYefaDFcpjoYNCADo12EELH8cjHWQZZj4x9BBW6SY",
"https://www.pond0x.com/swap/solana?ref=KKBkrHJr72dpbyS9RuMpWBwMDdZCZMpcArNREEuNKcDFSNnQEz9jBeH3EwLP",
"https://www.pond0x.com/swap/solana?ref=Jd2dv3qVRzuLZFtLat2HRrzmwmVa7Phb57LfJVd64r4jwXPhuVSUCCbNqqvq",
"https://www.pond0x.com/swap/solana?ref=PZSP9o4jJ8nbBf8VuQ5y11ENsMTbonUT52Cn1pDSutScFPXyoqrnf77bYnak",
"https://www.pond0x.com/swap/solana?ref=JwuQBxRqxRqwX7ZThJYcVgpTKpXhYvYW79voD5VNhtDY528b5RkDKxZDXmuU",
"https://www.pond0x.com/swap/solana?ref=K3CqcBfG2S1hZ4Bkqb8DFdPMLfUutspVzZPKooNrFdwrWSApHZnmWLrec7kk",
"https://www.pond0x.com/swap/solana?ref=Kghj7EiEguu1zBGo4Y5W23Txm2G7gHf8LYcGDMf8RSsqC7CNLb1vRLLCtiUm",
"https://www.pond0x.com/swap/solana?ref=QZGiby6SPtTdD5d49wLD7EE3UY9NRXUbcdpoymq6v3dbe5CNdJxSdGP1mSdw",
"https://www.pond0x.com/swap/solana?ref=J3TYEu94BabyMngB2Ve2e7yHMrBUxNz7DrzbBkxZWc1PVMHrAC3szE984Piz",
"https://www.pond0x.com/swap/solana?ref=JPBnf7N713oKfbE4K2kE6C1iiWw1s4kzAmpNfPkjMm18Am2VzdGxFAAq4wBs",
"https://www.pond0x.com/swap/solana?ref=QWqeKDV3c8EgymTrqUPegc5B66g1NnAhDYiHQGcaNmTzcRNqmCdnZZEQZGju",
"https://www.pond0x.com/swap/solana?ref=NsxbswCrrwsLk9dcsAa5yiEEpEkAWNhLoe63hsy6Q7n4oDvmqFNsbeWoAmRH",
"https://www.pond0x.com/swap/solana?ref=NZh8wysTKGsjLEoAhQN1BphNtHiDtgK1qJQYhyCNcYHma2HDwL9RdkzujDZe",
"https://www.pond0x.com/swap/solana?ref=K2h5egm4SDrDJW1zbiAaXV2xqixT1FsA5P1FapSeE2ywRFLsd8daGc3WJKq4",
"https://www.pond0x.com/swap/solana?ref=PurWAcy1qNY58PsbKvFRYqyfEiPozHZToR5fnmMt2gUPe2QC1JJT3yJ8GrUD",
"https://www.pond0x.com/swap/solana?ref=PYdvMH9XqwVYFpn33Wm1oQ8Y1AUKd6nUoAWXonA1yKH8qWReaaixkZZqSUAz",
"https://www.pond0x.com/swap/solana?ref=NHRTsuJC3vRmv15ofmC1kjTJp61feU5GBLFFEwkdAtahFvnnwRhzGTbw3h8j",
"https://www.pond0x.com/swap/solana?ref=8hMLq5MKRaTs3GH7Pc19LDprzNihUEL4D1w2oNzVcP1XhCsi72XXHD7SA1x",
"https://www.pond0x.com/swap/solana?ref=7WTPWhjEfyDrJA5crD9naahKgMDKQUqoXTMpLW4T3kkGkmUFVWsFj2opZoM",
"https://www.pond0x.com/swap/solana?ref=JKj6mpPTwe7NPcXpBAZL9qykPursz5emQ6Z3S5pkL5D86WLxax1NMjipMiL1",
"https://www.pond0x.com/swap/solana?ref=NGtnaqb14QnQVYGj2JXYbhn1Cy5eNJ2AhvS87EtAHt1tpwfJPFnTNdV2P1tj",
"https://www.pond0x.com/swap/solana?ref=QZCt6QFAVbqWkBFb2YUSPzs47RRyUSPxR6LYSMxFt3KcLf2vPhsGXLuP4EBt",
"https://www.pond0x.com/swap/solana?ref=Jep9UQ8zvMpvitUEFyiLVata18B6NT6gJRTzQRx74ysAQyQQhku2wa5q8dww",
"https://www.pond0x.com/swap/solana?ref=Jf2vv3rJCU7HcfNjqVPQdsk7S8wR29XJkBn34KJeFQVvButtVNfVMRJrVJND",
"https://www.pond0x.com/swap/solana?ref=PVzE1S4y795R9BHQodDDm5qvrJExw5jjTgKkHKYXcbUrv2MXo525MAevRd49",
"https://www.pond0x.com/swap/solana?ref=NaHrJqNdFxHprcLDkJwJTL73Z6rTMKgYChXTG7oNKBtQLbo3Ps1pSPAAkVdz",
"https://www.pond0x.com/swap/solana?ref=R9JrUVo9giTN6LDxcbfbJz5QCKWsPiBnTngrSUFXhTZYJy5Yiy5Voiog8hnX",
"https://www.pond0x.com/swap/solana?ref=QYUDunHJaRfkwmWizgVhJDmoYx9BG7RCnYVds5KRRtwHNLsXvCK6i1Z14hHZ",
"https://www.pond0x.com/swap/solana?ref=PX5QrspEPMme4wDoFj5M71JhDCcMQYn5iKeYXmM5S12twMHbtDjsgG8DMuxJ",
"https://www.pond0x.com/swap/solana?ref=JhUA5x8ikvWxpjm613B4EbH83cDnGR6e1Rz641HnAjADtzf7oncBS6sn65ze",
"https://www.pond0x.com/swap/solana?ref=QWYHPMwZ1bwmHQ8vY8QXLPh76DpTd7qtS6ruV5i3eXkeqTm99sjCz8JuYAA6",
"https://www.pond0x.com/swap/solana?ref=PuQsLJYojoKEqss7Q2h5RnTrQY5aGJLVrfAVdVHpzJwGknsMwWKjtdpNnYxi",
"https://www.pond0x.com/swap/solana?ref=JKGxho4PDJYDVRbyGaNjUPBxKGaxHAoyHtQB9wTvHyUSR2SSoJRmFNQCEmfc",
"https://www.pond0x.com/swap/solana?ref=JMiNdnyNeQN3isiEdWE4uGeNcrPG7dQedVmAAdcdtTmL6ecxsftbT8oxmQKK",
"https://www.pond0x.com/swap/solana?ref=NbEjyjfaBQndzaPoSKc86QSqqjGJstuCqpAnrWYWTJXoHaYFspb2AE5C8NBp",
"https://www.pond0x.com/swap/solana?ref=PGDDdNBAYeY5ayaUeHMTgAygLegSrBq1LwaHNPHjNukcoDNzMzoLGhGKQRFv",
"https://www.pond0x.com/swap/solana?ref=QXHtszaGWM718rp6NRBHbe8mLsE4XBDDNnfyX2JZzQXzvhQh4Avn2djtUq2a",
"https://www.pond0x.com/swap/solana?ref=PsQxVE3H7qnKC1FgxyJguBjzn53eUHkX2xSd7S4doQQAhXJ7xmeQQGwmtV3V",
"https://www.pond0x.com/swap/solana?ref=JP3FAv52divzBJNFETGFaAQWmjorM6yYedCxJNL4tNbiAjdZcVRMWW6P6ddc",
"https://www.pond0x.com/swap/solana?ref=PtPJTrM4cNrAzDoedFVTD8FsiwgHkLedafqUWbe39j2DPmactpVYrjFEs2Mm",
"https://www.pond0x.com/swap/solana/?ref=PD3fSWdXdhiitJKyqLgeo7oy18RMxuovGHxLzMEiYYvg97G32AxrNniHX2vm",
"https://www.pond0x.com/swap/solana?ref=NCUGkQHcV7LKXLdoboGSb2iDZzn7knPq3KafJKRYFozUPNVwYm8MD4qTeLLq",
"https://www.pond0x.com/swap/solana?ref=QAny8g6mf55kLWjz4iRK12JMmWrQ54hq1DuJ2CVgWBQDEG6rYXfgdELrHZQB",
"https://www.pond0x.com/swap/solana?ref=PCSz4Rek8PGwzAwsfdX2VLb7RkoJnGx5TEYWZztGeVFoptyCxMzyArKZxLcf",
"https://www.pond0x.com/swap/solana?ref=Hjn49R6kYmsRCVxBXqQHYH4VMEt91oTPnXSSxG2dcnYH82hFy2wAQnbpz6DY",
"https://www.pond0x.com/swap/solana?ref=K2Y6xBRY5HhTeCT7d7RpJD3HYJLsqY1ese2SBj4tYeFMjtG7GmN4FiuthVd9",
"https://www.pond0x.com/swap/solana?ref=7eTtsjredqry6dygt6A9deiNSrbWGGrmJN87xRt1cTQ4c6DV9YHcyW8BXWF",
"https://www.pond0x.com/swap/solana?ref=6BkWKkZyPsRwzkS8vKRs6JRAdcnw6gq3AdTx9ofjqZw3ARoDzfCyyLgD4jP",
"https://www.pond0x.com/swap/solana?ref=NChphZsE4hGrsTGSeH8HUc4P8PQppYcVy6Ue4wahsEouHjE8bPXB5pe5JtBr",
"https://www.pond0x.com/swap/solana?ref=QEs4KCPrdkWQp2tLZxQ42Xs32zJx37paANDP8irVXAd8LsoiWZgvQNG79Wws",
"https://www.pond0x.com/swap/solana?ref=NsyCrLJP3tUiZtzxwqbydQwo5n6YRnsNFUH9hEBByQDNQcHy6AqZ3gQGLmYG",
"https://www.pond0x.com/swap/solana?ref=Q9dmEJh2kgqTRkfuhoHYhFYRDRiTDZNUo8qafeSztArsUxLE5ngPQUvYjeiT",
"https://www.pond0x.com/swap/solana?ref=PqsGRpSeaPLP1gaogsY99j4teDGrdkirdVbasZAYLpaBjZzGCwtkgJByMhqw",
"https://www.pond0x.com/swap/solana?ref=KLDPUzgB5xQ6SYz5gQ4eD6cJJEf4H69haqXU3cGFvsWkFDZ4DpQsjpehfebz",
"https://www.pond0x.com/swap/solana?ref=KJE8ZYwcv1GX7yBzSSYMq4KLcKTRb1iYgZWSuMKqeq35diUz4Zhv5aRNZN9e",
"https://www.pond0x.com/swap/solana?ref=6vm8jtAbqzVDozNDpEot4UoBByJdzw2bqGNG2WQMnuzitRGTTrVvgRNLtix",
"https://www.pond0x.com/swap/solana?ref=NvAECCswyoZxhFEUCjhy41pgKdH9cm9wSi3yEXhyZJjASUyrWFm6es39AvMo",
"https://www.pond0x.com/swap/solana/?ref=NFHSoNc7YEu6Z3uy7QnYEATvhuZ5mxNC1ttETThnJf2S4AVQd7umVjXi1JAK",
"https://www.pond0x.com/swap/solana?ref=NF86a5xkCNNxWDQuSczDXGw6SZnwbi5SMUWhuzMgFB37fwUU48Vmw52crgsE",
"https://www.pond0x.com/swap/solana?ref=J35KxkThp1PhGEFi5Aypsbdq9ATL47rgE1YxpHxmFNCgC23shFJxVqS8kVpS",
"https://www.pond0x.com/swap/solana?ref=KKGbLHsxebapSJCcdnKzZ89MffF2ZWuJA7j7KTYbprUZ5UW77S3zwo8192gY",
"https://www.pond0x.com/swap/solana?ref=JzUxDm7q8aW51oSwN24rt4UtxHAKBLJDdjtTjiGv1ut7yAGMhBh16HE5hoHz",
"https://www.pond0x.com/swap/solana?ref=PC9gG8qFjf27oL3ti2TakNaCGxen7rMxJSW28UfZuRGseonwp2woNuPvDoQM",
"https://www.pond0x.com/swap/solana?ref=Hg1QhYoMoZ7VkQoKpYcboQFKSfxNMTRNmDEywaGE9x5syZDGP63escrrWYzp",
"https://www.pond0x.com/swap/solana?ref=QAp92BCdpsQPGvZbJLT5Nu4TJz3hxeWXCaw8QSfKYzu89efFMpk7dY14oTjh",
"https://www.pond0x.com/swap/solana?ref=J1tiWHeLXhHN3hFF6Bgz1Svd4HUJfeBHuHJ3E9sAqUF7A5MjozBpRjkRZJYR",
"https://www.pond0x.com/swap/solana?ref=PuFgmazr9LbjZMa5Ami2VZj466GbbWuXE26oaK62uaVnoMAMkMrEor3YXD2h",
"https://www.pond0x.com/swap/solana/?ref=NsXR45Mo4jBtDf8Z5dfm7Kf3GuPTY5856pc1Nd9LCiTajmJgGr3tyUQb1qBM",
"https://www.pond0x.com/swap/solana?ref=JhyYkgyDQi3rp1fNtgrFFenWoBP22NsLCuA3CCpC2zTJVFYBJYQWYLsfReCX",
"https://www.pond0x.com/swap/solana?ref=J3gD8VrGeKPNM4FtJvLJW4aJGxL4YhbCinN5egVovmyd7ghDKgnpvajJ5a5Q",
"https://www.pond0x.com/swap/solana?ref=QYT9oq7rAkeAkTdG9KzLHv3ZfWNU4s7zSjSA1q58rpRi7JhfwMYV5d7cWxh8",
"https://www.pond0x.com/swap/solana?ref=PpgwaXqg1qgTRbbyzsxrEsbK2DK9aB96161iEuLFunxDi4ETdMcnfFFqB6fx",
"https://www.pond0x.com/swap/solana/?ref=JJUW1sgGhTpFpcsVknuHH4M5rmnoukjevDP2aBx7DvmXFWSXd9HRWhmg1jEY",
"https://www.pond0x.com/swap/solana/?ref=KdTGickDB5FKeaV9xHLAZpjndThVss5hsj6iCqwGC4QTD3sfpc5dW5UUfdZT",
"https://www.pond0x.com/swap/solana/?ref=NtugMpmv3t9zquBUSt3jHBrpdznymnEbMucvpk9QdZjATyFJg9uuzYUHW8W3",
"https://www.pond0x.com/swap/solana?ref=R9JjXRHWY3utA66HfWPdZs4ioq1ybKMxYvdP2PvNjRu4EQJ57C56A4nsT5ds",
"https://www.pond0x.com/swap/solana?ref=Hg1yXpNCnib5Cg7zSFEAUP6mPDkFjBrA9joi3qS3xPfJQLtoNDW1p1JopsJD",
"https://www.pond0x.com/swap/solana?ref=Hgk8VnzBYiGkfBWjxoXfAF1PbvsgPNSZ9bh3FnuD1zT55NXRQt5uNUCF4kph",
"https://www.pond0x.com/swap/solana?ref=JL6YU2N8GjoaqX9AAkQ5tePjSMpwSap8mcb2u8YLcodoXXsFtWohR9TvCeuk",
"https://www.pond0x.com/swap/solana?ref=NCzhGSh5GmjCD7GAtnxDZxxPDs45CsmrgZSCdzatHWQAqmcdJQV7uKn1EQiX",
"https://www.pond0x.com/swap/solana?ref=K2m2BqzGnjaUWEfye1SRH6ehPBw2xBEyiQdc96d8wTRdWmL9Fs75xcxjyA9y",
"https://www.pond0x.com/swap/solana?ref=PCc8eh3tX9xUSajNkZS6YJcZNZ3HHgyU5D27Lf5Jv3F6fEPu9ravQc61Wouz",
"https://www.pond0x.com/swap/solana?ref=NDjJfNzFmgUcfbNH7wuR9z5q42zAwrP6SnSu1YcXFSUYuLJuRbiF7wBynzEv",
"https://www.pond0x.com/swap/solana?ref=JdBcdt6jEMU5ZrGYyu91oitrcAE6XvZaZzsYRBEhD1am3A5TJi4VA46vQjdP",
"https://www.pond0x.com/swap/solana?ref=K2gyuMpTvbGxr3ppCY6kpSrv7zSpzYJAaPCrU4ng2VwJFddLJb7xcAB7Ss9h",
"https://www.pond0x.com/swap/solana?ref=NrGv6kHsY3jx5mC2z32StqTaD2rmXDxYD8Xko8ZiiPkq9LLnCicqsPVQNV8K",
"https://www.pond0x.com/swap/solana?ref=Kf9c874W8EAbLgfgw3DbctSiV5TkUPguwtbAjE18N7gtTdLjZYcDi85Uafit",
"https://www.pond0x.com/swap/solana?ref=JKoPWEsYzWxiDBZYxPG6yTTm7vU7w6nkRX4cWGsQKT17F47ic8ShP581jpyo",
"https://www.pond0x.com/swap/solana?ref=J35p6BX3cX26S72qtQ3MnzApSYELmMhMRFsTzhokbCaGwXk5nynDoP9YNEyT",
"https://www.pond0x.com/swap/solana?ref=NbfqzRKZSuGmZhFKbrAim8k8Nguc3XY5RkETpcezAy8FsvrjjEE2Z6m4PjcD",
"https://www.pond0x.com/swap/solana?ref=Nvgw4ih56x942zUxcvz7AQyZ4JZpmjRdvTC6pmmXS4yzupDsAAcdNmV6V7y1",
"https://www.pond0x.com/swap/solana?ref=K2ykm4ALo45CB8zXrEzsrmVJd31t8CtPW5FngXKjK7nR3hbuSYUGfzNkd8RT",
"https://www.pond0x.com/swap/solana?ref=NDiy6thVwhx8auXUkjKcJmcQ5pKociBsfSsSXAxakQdPXRyMgMHuU16EpLN1",
"https://www.pond0x.com/swap/solana?ref=JyWtnooo1rPXzWjShYdRs4Lq1LV9viDzjXkzkiKsC2swDN74M4dTzUchfQau",
"https://www.pond0x.com/swap/solana?ref=QDK3Bdp964WfZVrqgAyNGGkFvekTH3dHN2Qx9WKKA4kMEFTczgrVRDp36iB8",
"https://www.pond0x.com/swap/solana?ref=J4YWYpdmpgvcqDo72pNSS2QsPhgsNibwSe6L6uq7rmte9Qzxt7CGpyaATcfq",
"https://www.pond0x.com/swap/solana?ref=KLbNCsdQ23FfRMen5a6rb5TaxmPqCH4urHY2iKns7NGBWrySY4ERaVuQuETB",
"https://www.pond0x.com/swap/solana?ref=J4LBLYsm71AgUHGBB3sRsj5oYLtF9f2JjCpwrbUYQvyLTjSJXPPUmd9VzMSK",
"https://www.pond0x.com/swap/solana?ref=9D91UYqnNtCWpvPARA8EwAyX7AgcyaBVLDeYV7oy5MDVgwtPNceC5gT7RoP",
"https://www.pond0x.com/swap/solana?ref=JeSR7gW9ebBos6UUYnUCG9XwfcMfA4wPXSUdoQQquafhzRr2T2vRqubbmjJv",
"https://www.pond0x.com/swap/solana?ref=PqsxEvvX88XGgZQZVXPRuwfFVLe9WhgpDXK2k7eQkUEWZ8XcFNWEcFxfXjbg",
"https://www.pond0x.com/swap/solana?ref=J4YWikDNuQcMDLsUrnPFDAfA5JMEQfnsQqAUVtVwq7dhqSaHVmskjjXudheH",
"https://www.pond0x.com/swap/solana?ref=R9JFZrtPRU7ZJDwJ7Ljc917Hf2KDDJoFBKv99Z1AoY2t8FcwfLamypuuNGLq",
"https://www.pond0x.com/swap/solana?ref=NrBxreeqPDeRbAKJPHqvxn5qoCX2ZMdJX39CaAaZGk5qr3kTnEwR7rNzoWrm",
"https://www.pond0x.com/swap/solana?ref=QD6335ifM3CLocRX8j8N82TnfQrnMzMLsUyMk8bPRm6cZYognCFwfxiyD18c",
"https://www.pond0x.com/swap/solana?ref=QUdtPg2hGwFyqSAPVcLzJZh99JwiGGRztePrhhHTu4V28FmFigbmLbErH97U",
"https://www.pond0x.com/swap/solana?ref=QXS8wQZRw9xU6HJcoLi4JoPeysGhTEumFpm8paPqmXyqsfjx7G1payFzFthN",
"https://www.pond0x.com/swap/solana?ref=79dJYEo4WUYfFPApwPZWMTS4GWHHoc6Yxgbyb8kHmKkDYSoEidVKyWCNAm3",
"https://www.pond0x.com/swap/solana?ref=NutKj4CJgbvpmJfm2XwbuTxViyjRQ9NSxFyenRmfTqwKmdmHhsMUUBihTDC7",
"https://www.pond0x.com/swap/solana?ref=PXggAeGd9u2QCktqLp8P2j7RiAtAoLztsPZnDqwu7Gom1xMSPhZq1MRsaH42",
"https://www.pond0x.com/swap/solana?ref=KMgrZuk6DieA17fMLnVJmdv4N4NhK4iMjHo52vtRabbeggBkhXZZ82FrnnFT",
"https://www.pond0x.com/swap/solana?ref=JeScmB5m86JR93Wei5cubkej4Kutqz2WjqSARKEYcao4NNx4iD5hieVAHUck",
"https://www.pond0x.com/swap/solana?ref=HhveCjeLTX5AqFxNZy3d4XV9ECHsZcVgwfaphYY2YzQWUF9EvEYNRC1Vq96M",
"https://www.pond0x.com/swap/solana?ref=QA9UCyEvgM52iUK3ruASGgimTjrbnyNmwPkCJaVaM78eLCQZTMi6zTuoCXNc",
"https://www.pond0x.com/swap/solana?ref=J39KFLvmfWeXLMkkK1JM3ptV6QwrUusB9k9DqCqts86PRHxsDovMW9t324Yj",
"https://www.pond0x.com/swap/solana?ref=KcraDogiT6xMXWhJMczmGYm5wbyDub4u5q1JYdQy9nvSstWGwYSS5LKZ1s6D",
"https://www.pond0x.com/swap/solana?ref=PGHVKFeULVPJiMHbrsdmruBpjYNb9wW9t9jkKaERHnRt1YNFnET8nq2zeAb8",
"https://www.pond0x.com/swap/solana?ref=Hif7sqzubVdGkgt75VWiUBJ7uLZ5WakYg6TnADHyaj9hkdDVg1MZ6JQmgm27",
"https://www.pond0x.com/swap/solana?ref=HPjmQj7XuWUc4SF2VopFaK4HcnDKJn6iwcnNsncFy6sMvBsgwmR7ebzsYLr4",
"https://www.pond0x.com/swap/solana?ref=KdyacpaN8smGrtDeheuxkgVk7CUCDNbB7443AuznjHi46uRn3pVELENcMzmY",
"https://www.pond0x.com/swap/solana?ref=HjBB6tn65yLM5ZZxZhS65qXXkvDuaKsdA1isPU1JKQPBcHxzGCeN4do3UxTM",
"https://www.pond0x.com/swap/solana?ref=NXZii1dLAmtFw3uMunZGC4V6cBrs5jyPHbAgSCT17CcMrQVVoyeDsytjZt86",
"https://www.pond0x.com/swap/solana?ref=R9XmWLseHkSdnKthCRi%5DtZF3T1Brhh3gdAmEjYLLA1eEitkXSiWcTfsH6Rdf",
"https://www.pond0x.com/swap/solana?ref=K1fM86kzCS8otqDq9N1qWEnXW8MFkRVHyNbgJHkXCBbGwbcbbX8zUQtDMp7z",
"https://www.pond0x.com/swap/solana?ref=Jytf6E9fa9TH9dy1gQji7SxXr11tacJ3oxEeoUtgM8tyHaNUWFxae1ySmtUw",
"https://www.pond0x.com/swap/solana?ref=HKpQbpLdtbhvCEmBS1qRgQ8sEUrip6GjMG4A7ChJzYoLBjfrN5cVHUkcyzWH",
"https://www.pond0x.com/swap/solana?ref=HgTcRNxHCtezmftdMpmDDRkk3mFSGQ2op6Fh4jL8PfQePHgGaDcGECkTKCYp",
"https://www.pond0x.com/swap/solana?ref=QVxngzZ7bSUDKt3EDhVK39m3pMSnakJGA6P8S23XR715TPGH8SiPTPki2CkR",
"https://www.pond0x.com/swap/solana?ref=KN4eefyDUzY48Gmd49SgCzwr3ZZttvZPYefUeHemkCw9dpv3AR5pMn4TT88H",
"https://www.pond0x.com/swap/solana?ref=KH8d7KnVFZsT88uNkLattvpW4S45h7chUx4XdTqPXPVd6kdj7b4zCGrHTJJk",
"https://www.pond0x.com/swap/solana?ref=JfKWB9D5LnHTroZ5UzhaxCSVfpqVEwWrz2kTVgVow96ou5N42Rer6ovYeVxp",
"https://www.pond0x.com/swap/solana?ref=JL6PwEDWseWcHJdi4U3Y3eAeh1cUmCb9BsxR8631gLyErgGmRpmFPPxF6AQs",
"https://www.pond0x.com/swap/solana?ref=JKS6DYezQn13XFMPBHDUiWfAjYY4wgYYikie1FL6BtJyEkEByuRu8ZH72oN5",
"https://www.pond0x.com/swap/solana?ref=Nv2s62g2k6smZwFasT5A8a4PtZ39wFkuTic685h9pJPrjdju5uFf5QQqeFee",
"https://www.pond0x.com/swap/solana?ref=KKLdiQzyAqYkctmZXhu9pMmRobFqfvunQmU5VqW9xzwvVZSUgpDZoGPDb6ER",
"https://www.pond0x.com/swap/solana?ref=NsHeUPebFCGj2sHcjDpe3ZPueMikUSyT1Jc6XqLs6nPPYEpW16tuvrjiPWAf",
"https://www.pond0x.com/swap/solana?ref=Ke7joXVghh2qhy71nEP6d45J1hbADPMPGPapYRo4kTDv6sjtK1nUCdqNuwji",
"https://www.pond0x.com/swap/solana?ref=KGyzihMepTvpopHWHLZLikZg4DywKMbiJjeMLz8efsUFWYCZ6G2HJ8ukm1YN",
"https://www.pond0x.com/swap/solana?ref=NrVijXtadEeXPqdJMn2PEFdjHwRLPLmrsURHvJQzNBS6to1VbE2qjEM3CMbQ",
"https://www.pond0x.com/swap/solana?ref=PBZZaAnzjZW19nXhAQYKY3uiZrnMNfkygFAo7M7Dvvez2PBpZQRR4UkvQrM7",
"https://www.pond0x.com/swap/solana?ref=R8aDykafucMKUh9w5824xKcZaK3RUpbx1yZDBaRn47dLUz6xRmuw1DPJVLez",
"https://www.pond0x.com/swap/solana?ref=QECTHy1zLXPpLZMeEAkFXk586tN7HUcwjPrYgCNT7RQamBxBBzAPX3VUztGU",
"https://www.pond0x.com/swap/solana?ref=JfcnzorHZh9QWrASqMTrTKiBWWNDUmtpLoMxvNvCNx8LeCJ89HYZFAT3Yved",
"https://www.pond0x.com/swap/solana?ref=JhftUfSPCKxPXMHLatuboCefyfuwe8ACUPF29htvoFQ86kKd4UR6M3gGHcPx",
"https://www.pond0x.com/swap/solana?ref=Heu4uDn4bUHouA9uAmjyEHnrPJo1xc4wyhYQoafbRZGcmrQK7mG2YGUHTgpd",
"https://www.pond0x.com/swap/solana?ref=JeSboh7kEg2U2ff7n1zE8bEQSp1xNhS8bV2CecibmjhnMqpXTRGp1rLpG4tH",
"https://www.pond0x.com/swap/solana?ref=PsCAyqeH1TfAs6UVD1gN64QZ64y2rStpuRMFAyfPxUTazD73fHcfTAMvQLcx",
"https://www.pond0x.com/swap/solana?ref=NbF6F1g2DLxjf4yZycx4q2qqaeZzMgigzXuehW3XJVG3vyj7TRYgY2ad39QX",
"https://www.pond0x.com/swap/solana?ref=JLUDq2yeZrgEAJx5TJDUrLgZzyFYo2GRgbf1LU6b7WY879PCojaY7CKWFKp9",
"https://www.pond0x.com/swap/solana?ref=NrZwgsW2gpjpiwdpvaMEhFCsYAFzmkmDKQ1H6QqusCEkSEo1R28ter9NFszK",
"https://www.pond0x.com/swap/solana?ref=6zv8tqxULrjvznLqHNYnBBHQEVBqjyx95obzPYFVZ9X5EzcQuRwVhEodVDs",
"https://www.pond0x.com/swap/solana?ref=QBXzdMiARGA5psci6CBsCU5rbQdQ91bPoFcygzrAjDCQjkN8qSHnCCpRconA",
"https://www.pond0x.com/swap/solana?ref=QUmqxfKZsjDRyY8SLwy7vrp2fSfRhALLkCQNq7nRHxoiEZx12qX1nkKBWyyk",
"https://www.pond0x.com/swap/solana?ref=PX5rxoXuFB7ec4ryFdYh2ZSKS7AftV8C9PGAhm2RSAvLvRk7ZdBY1JKLdxZY",
"https://www.pond0x.com/swap/solana?ref=Nu5Epr3mDA5nFfSo6P1KHUuXsw5mpKN3ATLfHHzPaK9pBv6pSQ6AL8anMFCt",
"https://www.pond0x.com/swap/solana?ref=PFhaVGSMogbzBBKFaafXN8oC1yL7AUe6PeABFuu13JvQ3zKexWn6a77LXCUZ",
"https://www.pond0x.com/swap/solana?ref=Nw4faUjNF3Jo8fL3RcjgbPC7i13Fh2puNZ8fVnFTP6k7bTtuzb9ysePZdFb7",
"https://www.pond0x.com/swap/solana?ref=PXp93wReqtpLoF5ozMQdPnyT87Tm3eev6g4gizExBQmq4KT99mUv8CtePUtq",
"https://www.pond0x.com/swap/solana?ref=NCUtUeBbPZLGAMuStMT8ckmenr5mM35EoroW4LQ14k2Zo78tybELksZzu7D8",
"https://www.pond0x.com/swap/solana?ref=PCEhdGsVFhUnZDRyuGrq2siczoaojp3AqvCFfT15TjnTXXSN8eaNQnTSqwk9",
"https://www.pond0x.com/swap/solana?ref=NsJXziFnkJ17LFzdkZfR9Rpyv6tnfi6ANVmjy1VmEe1hp3JzFd2AujFNtGyG",
"https://www.pond0x.com/swap/solana?ref=Nsp4Pi25d9P77CuatzejKJadeg6txkEBrVFwwRVuRKxhad1yDTTzDAQLFJ5b",
"https://www.pond0x.com/swap/solana?ref=K2UCKNFdwseocVvi3YaM6UrymgB8pmw1XwTCJZpwAE8rTycfR82ZKw25FEfv",
"https://www.pond0x.com/swap/solana?ref=KeLuYTZYpcVnyghSHfi9Hzvn6QnyNdgimtX9nXGiDtPEB3Mx2vuKozosm4Hh",
"https://www.pond0x.com/swap/solana?ref=PB8VrZehjA3kb5vQv7Yp3FLmiNSXU6E5imtmfdXzoxF9Rg4uHbkGgQ2psigX",
"https://www.pond0x.com/swap/solana?ref=KfWxBM1dew4Vi3KC19Hdu3rkzDBWdg3o5wKfmTu6qAPSZrm3NxFY5bNSdqSH",
"https://www.pond0x.com/swap/solana?ref=Heczty23MvNfAuJLZZjez9K35PKf1nmw5syq7V1TrJtcbsSfWxpPhBD6VAwb",
"https://www.pond0x.com/swap/solana?ref=QWmpYtxgQ5QNPGo4WzccmLXT3rwubHoRyMhXa7kHzMPKjdftBvqMBkCDNWfS",
"https://www.pond0x.com/swap/solana?ref=J4ZbNug9sgdTbYjXyoMfx2iaHxTsepPMHmk23TbZEeHMFb1zNELk9jo2L2Ny",
"https://www.pond0x.com/swap/solana?ref=HQF1TCnyxqBXBzg1iUGwY8SDtKVNgYfFyffanSpxcd9L1NXZ1c5LPt2VNfpH",
"https://www.pond0x.com/swap/solana?ref=JNDumpLU2XwiRWVPxAVUiWowHxJNNnTUZi4PS7dRuYKCQmKwx55JHukXaTRt",
"https://www.pond0x.com/swap/solana?ref=9RMf2jqqSQhg4Q49W1G63A5Ufw8oRYeoSzhPw44KHZfivbeX424x6WiVCgd",
"https://www.pond0x.com/swap/solana?ref=Jzd3gR6cSdmvRDb2HM8AHAjrL6FP4PrdBohx2zTYcoNauLazAtafZVQJZAjP",
"https://www.pond0x.com/swap/solana?ref=QDAB6rLFi9F22pTMTaJ2fkBYXoy7hqVppguqCpbmN9ALNW6jqqhMEd54RVaS",
"https://www.pond0x.com/swap/solana?ref=KgFaGi7cMpX83dcGdfQ4zDr5SD5VDNQVUMKYfz5KxW2t3SXA1P9XMDiWTp6s",
"https://www.pond0x.com/swap/solana?ref=NEgcaxpeeTngNCAcmS8LCFaZu6t6z8Vy9g9BgBQtm4dDxPaDESFv9Yhv2JCm",
"https://www.pond0x.com/swap/solana?ref=Nu8xn7ESdRibbB2Wb6o6ANE7kuDiczwvvUFnD9BJ6ckE1XoPNisw4ZDNoGac",
"https://www.pond0x.com/swap/solana?ref=PDKkdgCs2mYxC6bhBNEr9kHSnAK2uCnha7r56AemoQVxAMdxvnGo3wFJMVXz",
"https://www.pond0x.com/swap/solana?ref=NDj65yyrFTDAoqSnK8yV3MFwxayuw5gbVdmJyYvmc98FudPs1zBeTzedhJqr",
"https://www.pond0x.com/swap/solana?ref=Pr622Tqazzu4dLuwUGxXA8szK9D1vpR4L7npCoHvPTGwU3VEnc2xaMD2JHig",
"https://www.pond0x.com/swap/solana?ref=PYBv5J7919wwVw5rRdwV5RB8pnUoCGsLsU2CirCBodD3ycHM1HGfCHfhsSwB",
"https://www.pond0x.com/swap/solana?ref=Q9qxfjigAYh5XUJ7Stz36PmYzCQsKKSre1Mdmk4AXnjfjAUEoyNPSRo2qMSn",
"https://www.pond0x.com/swap/solana?ref=PGHazenMBVrq47GBBsd6q4YbQBhKCm2rXmnUWWbx4vTaLPfVJ8JiQ2gwPNZw",
"https://www.pond0x.com/swap/solana?ref=NXmT9mrRcCByTUYM9TN6o7QaA2MTDztNL6yGyFsLExwUnLkLK2MTZfTPmVFi",
"https://www.pond0x.com/swap/solana?ref=JLcmXhyd3YGWbsy8aLDvZx4z9TqnjmPVhLYRLrRDRyLcQjgDnvWJV2bpzRD1",
"https://www.pond0x.com/swap/solana?ref=NXL4tsDtu9RX6EA4XP2T7ZeHYNrXm7jtjwMMG52qUoEEu4jzsXE1FXAFLb3Z",
"https://www.pond0x.com/swap/solana?ref=Jx8LVfDREB4Ytt84W4PR9rRrhQoac8SJoJj9yS1ZoEGfktXK71o4ogY5sh3w",
"https://www.pond0x.com/swap/solana?ref=PFuufoyd1UhwKUyPdjqvSd7fUBHkeNzb8d7hK2sYZjxXD741AKHaaKMX6Zsy",
"https://www.pond0x.com/swap/solana?ref=NDbFxArDnNPMUgvDmmxCDbqu1CYs7D7ZVr4KTtUzb3hP1crob3FeFuuVdpDY",
"https://www.pond0x.com/swap/solana?ref=K1MopE8rgjmEXSfKqWUG2YCm94rDtbb1F4Mmfd13GTRmqDfWHMnA7TFm3KZk",
"https://www.pond0x.com/swap/solana?ref=7Rx3TizpQuqDH16TcWz43s4Y7H4myh7GDDmm4fUvkNz9bSSSZYpDz1gq5oE",
"https://www.pond0x.com/swap/solana?ref=NvKvdW2wMyJvmQ7HCsiF7HwB6UwgU1qsLafPvG2ECpqKq9ggGMSxBykAdqnr",
"https://www.pond0x.com/swap/solana?ref=HNUU1e8ohw7qXvtonsDQwAWaUbr4vzvcjpW1CSzej6YurtGvF3SPp5EDqpDF",
"https://www.pond0x.com/swap/solana?ref=HeqFJKfgLTbxbmsSU6eiqTCnZVswf1LHT14ZQnkg1FJAdBw9FbZXnwLqricu",
"https://www.pond0x.com/swap/solana?ref=NtdBrgYQ1ymTVNeuMaaosnvQ9HFhyiQgjDXH1cwsxEV8ueU4XqzTBAcjxanZ",
"https://www.pond0x.com/swap/solana?ref=HgtzWqnmU7tFdZawwjMUg4Kxa9PiJXcm7q4sD5oG2qeH414XvwEo7Q3rQsjE",
"https://www.pond0x.com/swap/solana?ref=Q9htGujJ9L2a4ZByi2f6MvdNa4PUZkPMnbt1FKMUFbX2kt7xHNwBn9JdcB6G",
"https://www.pond0x.com/swap/solana?ref=PuGc9ZkAJSCzUYgZYW5Usz7ELUtzuDqTb7ookTrhLWHbvf9vAaCreUroq7rf",
"https://www.pond0x.com/swap/solana?ref=PCAUg95tgaveVvwPUNqXVppYsLRvSSqPyF9uWYua6wV2XERkZRTEdrB2nBQD",
"https://www.pond0x.com/swap/solana?ref=PaQ6BWZqpKEcEaQW5D83SckFz2WnXti3BiRJZp3bzgJLWooYVyJM8eTHGa7F",
"https://www.pond0x.com/swap/solana?ref=HjYBwbyKV2Xke32jQjHhEDXBWjw2J2BZTFi6FtgMQLbRE8jjuabJ7boyvFds",
"https://www.pond0x.com/swap/solana?ref=HyQAtbRiS32EWSCGVYt1meYhzUTgJHb8aGaQs5zVoS86VsFXK5fspHmWChKj",
"https://www.pond0x.com/swap/solana?ref=Gzp9boPwfRRnGeJLn2wKV8dKGriTWEjAGdYMC9Csq1Gw3bBm1y7BwDvAiab7",
"https://www.pond0x.com/swap/solana?ref=HiSgbKCQJQ3YhgGUS3LHtHGbnrwnjTZzv6GoR4WnNinsZu7heSf9vcUUV9zM",
"https://www.pond0x.com/swap/solana?ref=PuZKvJZm3zi4UuzWp3z6kGQ67T6YLue7GTG7EkiBmCLcNtxfxtTJuYhViq8P",
"https://www.pond0x.com/swap/solana?ref=QX95kmuDWmxrALxSM5X78MWn1vPD7QU5nnijRLuZfUDs66QPxwAPoh7561Ca",
"https://www.pond0x.com/swap/solana?ref=GztmpYQFtwfkAkZKUnESg2GgyKwrdEQGWNGcyoSN5Z8bnjLHMn9DCcMp5cK2",
"https://www.pond0x.com/swap/solana?ref=NHhwASaaCkyWXxpWDXTyLJ8fHXEYyiCNSsCvGtkjVkv7SzwEsdbwZeTxRjCw",
"https://www.pond0x.com/swap/solana?ref=QWz7wX9jNLitRfx9PhnTTQTLfo2tHvzicVvUb2exYtbfa1DmivZj1zYZtPGk",
"https://www.pond0x.com/swap/solana?ref=NuitherZeSUnDKB3HxpP2smbfdJE7eVFcHSHJRbujNvCRCmBffMwYqEijSqw",
"https://www.pond0x.com/swap/solana?ref=PavBUY4xeWx3gGQS9b3gpqojTUtt8BDjkZa4KBKVciG1ZRP6BuCNvPj1T5L8",
"https://www.pond0x.com/swap/solana?ref=JNprzrgXqvfRJFXmbj8AfUn3Hpg9T8eByNfz327TXdHK2PukLCXPPeM9Tccn",
"https://www.pond0x.com/swap/solana?ref=PGMxpJUVZzxey4NoHtF4gkqvYHS1Y2K5x2xy32wTnwncVY1yKz2vRnZtewBt",
"https://www.pond0x.com/swap/solana?ref=NcMMEZ8qfyyVoZYzAj1wcaX75TsjzoMiM1YCmA9QNV13dRPJMhtbaEreuLXU",
"https://www.pond0x.com/swap/solana?ref=J1A2V61WDSySkQ2mbBFt8X22FvBZA61WTFko2iPyKZbPQMjzQcw2wbpwxtAy",
"https://www.pond0x.com/swap/solana?ref=PFYu1eCHdYhLR6iCmdK9hz3Fp3W4M6aEK9oGhk7ySvRuLhfaN4e7tvb3hhL5",
"https://www.pond0x.com/swap/solana?ref=J3Sgz9vibjw7Euta3HZ1onUyTVePxVzihpXKuJvRdGpL1kKoHS2kP1UV4Qv5",
"https://www.pond0x.com/swap/solana?ref=JN6LQSq8XGDq318ockvEhASS14hJ69yx4fWgMuqJZGBx4mzQJYNVsYcbBVzz",
"https://www.pond0x.com/swap/solana?ref=Hi4gtR9cS72i45WubZ12vux731C6A2c8F8tkhbHmiVsMhNae2WHB3dipeRsh",
"https://www.pond0x.com/swap/solana?ref=JJKfvvHoBxQaEEniNDsySNP7Rx7Dt4Y2pRpF3VeUJHTmr9CcVt97bfzmn4Jd",
"https://www.pond0x.com/swap/solana?ref=NZYvk3S5EducPJWSAKjDQCyuPTKTb75GjiEGG4cDo3K1TZ2exK3QPEHCiqUN",
"https://www.pond0x.com/swap/solana?ref=KHGeiJvNG44TiwiV72CXAGpwZok4qYERmbrE77BhZxgvdSF6bQDjeuaa4Rrs",
"https://www.pond0x.com/swap/solana?ref=Pumh95acSjG3VweGjpnt3YopNWGBMBDs66xuvfPkWAQr1QcUrvdvYaFgz8sm",
"https://www.pond0x.com/swap/solana?ref=Q9v7bUwVnpKmCWXL6D5XRRhGsdCoW9DoMBszVgcSHsyRqHXctmnzujpmZRrz",
"https://www.pond0x.com/swap/solana?ref=NDxa8qoF4r598EbDPv3X7qWYM2hYZhB3ipQTM816LCCZig2jZQmAi8NF7TRX",
"https://www.pond0x.com/swap/solana?ref=PuQWm23uyyqRFkQt1qz8QEE6Ptr2VzoKsiHt5NbJMSAmMhAMoFF11TWdfitK",
"https://www.pond0x.com/swap/solana?ref=HLrVLNWF4bBxzyzeZpvsA8Z2a8QKw8DYaQssxNS1uZZj3QcGXuRek1EWdec4",
"https://www.pond0x.com/swap/solana?ref=PBVVbRpY9dD3odwD6mZd2WVNkMrvTKjzEDTuMjDmw2hMZuqwZMVsvR8MHGav",
"https://www.pond0x.com/swap/solana?ref=NvPvpV8CRQwZLsxnJyU25sdLCpMDWgujCLoLpcJZyTZ5iMx9ktm9Kam82x6W",
"https://www.pond0x.com/swap/solana?ref=HLhubh7Q5ux3vrC2rPBAz75KCHWRixNnj4WGVbqxKFK8LJ5vG7hxGTiTGj98",
"https://www.pond0x.com/swap/solana?ref=NG5QfvYRnAGUpXPFuUfWpoY2dKehhVjYkGcp1M4W4c72Ajuas9q6Pj3SgYCD",
"https://www.pond0x.com/swap/solana?ref=NtQGmXpmPdKMmjHQd5cPVtUKpYYFjURck4fjWPvxiQRmZhEHe2dfjs57o9W1",
"https://www.pond0x.com/swap/solana?ref=9dosLahPw12S7gJA4DgYjPAczo1B9h6bH9GBfCwgtG2ZFT5khzaMFGbd7JP",
"https://www.pond0x.com/swap/solana?ref=JeSiQMGr6Z5XZMXjG6fzqTTXagDuoFBJsHVTHpkwVPoCkxS42oUF8eguX1ZL",
"https://www.pond0x.com/swap/solana?ref=K1SedkjsnvMdJQNV9qSwAwHfb3qSu6o8K1sXCbV4p8fAUfUZzyi1GfJazKYk",
"https://www.pond0x.com/swap/solana?ref=QBqfqasmbCF1gRTYVXyDvAjMgrcgjnVQfe7KVFuw5ePozmZNjdT8BigtbUV3",
"https://www.pond0x.com/swap/solana?ref=HifuKHh7ba7FcDKAvwx5JuT1KWN6kHhPC6XEJjMd89ZYQ1DgdEQqsMWk9YEH",
"https://www.pond0x.com/swap/solana?ref=PEjkNxmSjCzPQo6AvVUnjVQDKFxsEwjJUjvGeaX38Fo4Tu4pVDot3jnnozH4",
"https://www.pond0x.com/swap/solana?ref=Hiy7C8xGU7yyNeLBNBngWTWu5qjXmBtgC5W9vGCVKB9koF7D2DKCfH9mGPKH",
"https://www.pond0x.com/swap/solana?ref=HQmVkysqSh1Z2BJqKDrod5SmVWgKs2HJ1VGa1ap2U5vgPgfuvirtNceEfuSR",
"https://www.pond0x.com/swap/solana?ref=QZVCoYvgBxPYAbYBJVJfhaFxPstW7d8Mj47EZMXq1ZbxDUoXxn9Puyrys1BQ",
"https://www.pond0x.com/swap/solana?ref=JKjiWwAT3wbKdi15V2YboB5xUg4fB9oMoe2egi23rz8z8Lpkf7L7cMCcoScv",
"https://www.pond0x.com/swap/solana?ref=PCEpVamjg88VMDa65NeZiWjffnoa94NegRC6mhbCnihw2nWLzPDgFCt28vPy",
"https://www.pond0x.com/swap/solana?ref=PBLzfw4yGawHqE3CSgt53bcS7sgyE2LbWjk8tijrL51CbUjeVRw74JKXzW6v",
"https://www.pond0x.com/swap/solana?ref=J3sySNdvDjWLwbPpD3UnxoFuHnb4gZZzf78yLPS6zhaY3TaZw8DzThpwkigg",
"https://www.pond0x.com/swap/solana?ref=K1SN4vrMWh6H6xdJgfrFYdsrtAK8uJ59M1Pa1cAGFqs3igQXMJNWWVWPYcRe",
"https://www.pond0x.com/swap/solana?ref=Hyr8sivfJYMwgDqcyhbCoALPQhazC7DCaG6Zh93gR9ortjW2t5EPPFiJ6b7q",
"https://www.pond0x.com/swap/solana?ref=PsZAfCo6gkHtFY4mt46J4AcfAw4CGjLkD3BR2Gwse2kYTdhsAowSzaWZqpGP",
"https://www.pond0x.com/swap/solana?ref=KJESx4j8REH371MdtunnGR64jiusjwKpzWxrzDcKa2PjPbrnznJaauaABoxt",
"https://www.pond0x.com/swap/solana?ref=NZyh9tYroRN1snoYqKWq5bsiEzvbBnNzhN7LYeHvWbvyKqfqxrvGUcN8cTa7",
"https://www.pond0x.com/swap/solana?ref=QYgmjLit7u2Y2VX2RXAjyBR3365HtdE6gUh7vxYYt5gQFbgLLsLeRDYwbM7j",
"https://www.pond0x.com/swap/solana?ref=PsdXRRPwFGKLLmuBMgg3RENKCmMev4p9UNKQ5jZ5jncjUfLTkXqyA6Akd1tm",
"https://www.pond0x.com/swap/solana?ref=NrBq5YNcH5s8HdT5UJqhA1X6toYYfMNbaT3X9MKdjeBwKQRo5UAicHo5nEqX",
"https://www.pond0x.com/swap/solana?ref=PExYsp7UcBuFdbzXZMNBvcWXWnKMKEY5JmGB355B4UjKDE3ni6UgjncHiMmB",
"https://www.pond0x.com/swap/solana?ref=KdY4ZJZHNTJeWCyrmNVMZ2vM8idJro3DDhieywEW5vY1PgNZHKmJAd2Yi2tV",
"https://www.pond0x.com/swap/solana?ref=QXCkfh4EEWgsPK62gsPgQS5fZY5MUuVP1cwDudDqUBCu7fTFUr4v3op2eUWY",
"https://www.pond0x.com/swap/solana?ref=QVosyLgdgjPzLmTmLPcL5rPFT2kCPXHuTQdLeAKHFVmX5gcynJ1ZiSeAWGhZ",
"https://www.pond0x.com/swap/solana?ref=NYjMkpwmei6EtdVNwr26KrZXoSh47pLY5XL58WfBykNuyvEuwQsc3DmTcAsX",
"https://www.pond0x.com/swap/solana?ref=PseVfQRkjeCGSjiu8ucC8c6LjqemYLo4fU4a9RMpza84Ua6Sx37MeA14MNQF",
"https://www.pond0x.com/swap/solana?ref=JfmJdKsnRxKSMbisDjUJoV7Ssu66DW1EPHnh5xmP8uGv5MrEJomhLGx3mFag",
"https://www.pond0x.com/swap/solana?ref=JKigTDZxyYydz8yPFgYc2yztMvRKrWDSNV6MS7tw76Epg3DUhEydjAM6Sd6p",
"https://www.pond0x.com/swap/solana?ref=4vMB9MFFf5oGP8DXGPoyGgyXxBYMaoRrudRBKbRXHUtWBECU83o4usJeeZx",
"https://www.pond0x.com/swap/solana?ref=Jy9TwxBp5WeYeoCJMBaBMX5NfsBqdxnL2jwRJgskscZaSa8EeUgLN5HA5KAv",
"https://www.pond0x.com/swap/solana?ref=JKS5AZwcMNvs3G3c7ZvS1cQcaFQy9aUqqv4tdxAY66YyF7WDYKWuZE7KuCH8",
"https://www.pond0x.com/swap/solana?ref=PbDg2naCWky3Z7Nu7CgJtWjEfibq1Yt6siimDiBU8ArXsJ8fhgCJKKi1Ciy7",
"https://www.pond0x.com/swap/solana?ref=Ps46egfUiS8edi51w7TDfjporyREDzKoxtAsdnMUCdXgmhdVZdvD1VZRxp88",
"https://www.pond0x.com/swap/solana?ref=PW8kfQxjdtRzpR9zCktCc3sbPNXWQD9BnbHDtG5EJfvBW2Pzbr5Kr8wnDQLm",
"https://www.pond0x.com/swap/solana?ref=HPxTCXWXS85FWnrZkMcgavAc5haWDvXbxPyTFQnvP5biyjLLnibPUzcKqqwu",
"https://www.pond0x.com/swap/solana?ref=JdKmyaz4CQwxf4iSSMnMugNGTHB47QaLwUuTUAdnFKBkgwZnmHxwXix2oNQk",
"https://www.pond0x.com/swap/solana?ref=HjFrAPg4Xr9oo7RJKSE1JGkL8M7rtywFMqLFAYdVEZmQQxbpzB5VnEf44RJQ",
"https://www.pond0x.com/swap/solana?ref=QBv6R75t9rMvkfPorNawTaqcXi8Bf3WPMeeDVvZ2qLg9XDoKA6i8W56t4qUZ",
"https://www.pond0x.com/swap/solana?ref=JfYTAJZF6QswAFtn8mHtKTbSPxxR4dJvCjeYiagsGALFezNfHXTuFn3rhBFN",
"https://www.pond0x.com/swap/solana?ref=HibSwQPk6JpnfsZzD3Z48MrvTxHcXufC7GVAgYtNzaNuTJEEqMRnX3eiPzjd",
"https://www.pond0x.com/swap/solana?ref=HMp1pgV3aJd1ywXGtSkY3DR9EbbctzyTueUGwUXXAvXLvMsNAMbp2N87kKed",
"https://www.pond0x.com/swap/solana?ref=PuBiS4Ah9Z57XivkPnrZ7U6aFZFnBfKqNDXFQJKjQgTkkikPkd8nrWLX2Y2y",
"https://www.pond0x.com/swap/solana?ref=8BRmEH1Bxmq8XtoVhVspCwid51qWVNkJUCQX9s1vg5d5jmugMD3GYskm2nD",
"https://www.pond0x.com/swap/solana?ref=KK7XwaHRD22vP4DWM6vM6NnFCbaLhaB6TK33euvHXWvPdRjQFAKbdukzKfDW",
"https://www.pond0x.com/swap/solana?ref=J2Bj4K1jbTgXTQJZGgnMQsGzRPmRnPRsQPjHirjC2MPSzGQPrMdYfeo4Q7jJ",
"https://www.pond0x.com/swap/solana?ref=PFgi7BZiRiPmgddRsMHbzFCdETmQuknN3ufZNkdAiwfuZmSj7pAoY4FZfNUw",
"https://www.pond0x.com/swap/solana?ref=Hebsom1y7ZfBRsw8Mjeno8w47kLB7WfdHV6Yu3FkHdLGy7HSx1cMoFmQ2exs",
"https://www.pond0x.com/swap/solana?ref=PtNpWuyQuaXDfcXaUrUkvvCf86igrvAfJ3ybSQ88pMcWGXJhoandinVc156J",
"https://www.pond0x.com/swap/solana?ref=Nu8QvCA9AjXkuhmJ5NktAvrzwDdhWd7yuXRn6FFxsNZTDzmCTDb9i3Kdqnkq",
"https://www.pond0x.com/swap/solana?ref=NthHzPNhVZCYskYRDaY52xsCSJkWCkyrGysy2QMW199nTPDQqwqhQetSYjZ2",
"https://www.pond0x.com/swap/solana?ref=KMqyoh4kqhQ1pPEC14RoFdCGwfmkr1HowACM65AMfmdmECDismx1BRY74gD4",
"https://www.pond0x.com/swap/solana?ref=7aTaUrhrwwvE9puSEg8ZwAbmzfszxsFnGKj5dQ3BLjw2SzhWRKhUmWp9VpK",
"https://www.pond0x.com/swap/solana?ref=Ntm8k9hVis9kv3JBqkWKqQbaygwqA41rjEQ5V4sR5c8qS3o38G8v25P8ZQiU",
"https://www.pond0x.com/swap/solana?ref=NcdeojqU31xdMqc28zD5byPWiBFKQccZnBa6ZP1KojgkX4GSwz1646QMxCkA",
"https://www.pond0x.com/swap/solana?ref=JM8QgSBkBrqibJ5FccXGpBX3TZpzoBg5q6q8MUsjX6cFZQHK8f9L7h4AWQPW",
"https://www.pond0x.com/swap/solana?ref=4vu7BpnjehaKFnYU8DyqDuNWDx8uQBUHY95pVnCWUZ4poyUp7ya5P72o3By",
"https://www.pond0x.com/swap/solana?ref=4zsfsDNGoWH7RN9PT5wDUa8nKsaFQYnzTNtcErU6KwKAsAXGEKwZoDUBcUE",
"https://www.pond0x.com/swap/solana?ref=51j5C6MVpsgRxSw3PDaVJ7T4piaCLD7Uvcnh2m42TxhKyX4TLtwZhEQmS7P",
"https://www.pond0x.com/swap/solana?ref=55hHeU7fXWtx9xBiR4nMyezKjKaJLrN8rXMj3cHyykbpxVUygpm89Zh9tqf",
"https://www.pond0x.com/swap/solana?ref=55Q59mePEprpiBY1doTqEFF9ju19ER1YZqGgtAXGW6Afy1zjro8on1uQYtp",
"https://www.pond0x.com/swap/solana?ref=5EJhx9uEyityHQmRpfZorqVnGPftNvh6p46jmZ82h5hhXavg6nhLt1fDpck",
"https://www.pond0x.com/swap/solana?ref=63aGBqyYHw6yAosTrvDWqsZeCDc8bm6HtsRZ2cnSdq4MhtWpXzsASkiTbBb",
"https://www.pond0x.com/swap/solana?ref=6d8qJVXzt3tUrtdj1s4V1jVDEMLeQ8jkGywBgxFccg6PNPnu3RmRn8RCKkx",
"https://www.pond0x.com/swap/solana?ref=6deiK2uKozZwJnaxQiwkhSJu49RGTn6WZZtijE1guaasZuYL6ZaifFGsvZa",
"https://www.pond0x.com/swap/solana?ref=6n9R7RNxK5isrZYvUGcK3hspTbxSxz3ENSap9nxHFaNX9uwpyzd2P4WvCby",
"https://www.pond0x.com/swap/solana?ref=6USRMpj6EJNGzjRc3pVsYTuqnW2YF1XbUUoPkaMYJgQqUc2hp5izGRmR32c",
"https://www.pond0x.com/swap/solana?ref=6UwfWx6ywG7DthEoSvorT2JmzCgCwbLjGBZTNETMStiwz5cTFUkNDAWsTuQ",
"https://www.pond0x.com/swap/solana?ref=6v1PKguk8DjL9m4qqpCPU1etnhVSVwMjjxhsgRHF16Mmm8AgjEzjHTyxKM6",
"https://www.pond0x.com/swap/solana?ref=6YrynXzAfx8ipfjwyoKfXShsQLp7rG9zZ5t8M32uNSiVHxx963jXNzuJvvq",
"https://www.pond0x.com/swap/solana?ref=6YsrChH3TKnVVtKdvGWPDjtxWq84nuwQgVKnP4uQWfD4T8b9out4CDQvGpA",
"https://www.pond0x.com/swap/solana?ref=6ZUqHP1d2ZZubVZpgC8h9FQo8fV5Z1VnNwXUWE5yi3S2dfvr8eG57uvhm8R",
"https://www.pond0x.com/swap/solana?ref=78YHjm9qZBG32pKUkLGt7Kw6577fN8krebRpao4QqkadD8xkCGZ5CJhXQRM",
"https://www.pond0x.com/swap/solana?ref=7eR6MKvXebdCnNs4uSrJk9r6UYyVUVwVJNAxewNoNWqyJmZYcNBaPLKLP74",
"https://www.pond0x.com/swap/solana?ref=7J672fBo93vPWuSmUHJYnaa22awhsSA88jM9KzURk2VZA7FHXP88nsg1tCo",
"https://www.pond0x.com/swap/solana?ref=7MYbJMMCXfxScmLFDbgJxpWdwFMWVWiu4gpkQRyHfKmo6WQWxSQuRLu7SSc",
"https://www.pond0x.com/swap/solana?ref=7SkNQUDtpXc2mdLqnqQqCc8AgsR2gm7FK5cHT5Tz9Zbf8Wi69t7XfuAtC1e",
"https://www.pond0x.com/swap/solana?ref=8F1pXNzdjKXzbGDzUyUDFcb1zeW91Q4Ws1u8mceFm3U5otKMWUxeTKCLoXm",
"https://www.pond0x.com/swap/solana?ref=8KLYMR7CBoLrcBFnsCcvbLUgjWcqkpZgh6HxCSXzJbM8V8zFQuAC9AfsuWv",
"https://www.pond0x.com/swap/solana?ref=8KpQejPLHefZPh64Aj4YiMACE8Y5EwJK6dxgXWQpRyHHkiK2jQAVAvdF3QB",
"https://www.pond0x.com/swap/solana?ref=8Q8EjZ1SLAWiekrTdMa5cm9BEDv7Wk4iXmCJHhPVkanojw5UWHWwsHYr9Kk",
"https://www.pond0x.com/swap/solana?ref=8qo14Wr6z9y1JNnm73incQVVcwMz9bcLNEQaH8DmwTkQ99jJpTunmg2VrTu",
"https://www.pond0x.com/swap/solana?ref=94XXDuGwgkeUFpJefMm6dMbJ5Mpyp1qTYE7SZNNrVW9vY6FcsPQ7fRPsMgY",
"https://www.pond0x.com/swap/solana?ref=991yjh7ybLDEbLS69yAtJhVBLRt8RaJoF36EZZow28CGKSTh6EoRggEvzPx",
"https://www.pond0x.com/swap/solana?ref=9RprZWM9n5EUN74mFtptkmEYDfW4SRFvFQbVavSQorsxUUCX3iu3d8gvha5",
"https://www.pond0x.com/swap/solana?ref=A1YE2SCxPnCkXW8h8GsCrsHZJatEEuHoP3pFndR4oKL7qCB1XRjgvcW5f5Q",
"https://www.pond0x.com/swap/solana?ref=GzkRpDBk54UNEWS5QPx2s5Cr7Bf8KQNxstTGXywXobzKwjpLGPKknLPt8ooP",
"https://www.pond0x.com/swap/solana?ref=HecL54JniVit36uWkouPT7xF3gNQwyLQDhxE49YjCcv8snmybEJ7MYUBEUdt",
"https://www.pond0x.com/swap/solana?ref=HecvqpTBcCs3E2XZeYxR2PtcEg9GgHzW1c6GfzfaLUhbK87wvypjWJdgTjpS",
"https://www.pond0x.com/swap/solana?ref=HekVZJqHyHyP4kTiRqp2dEvDai4kHiVFUv6HeyCPNm6oJmTr3r2UCrh8z1Zb",
"https://www.pond0x.com/swap/solana?ref=Heuoe3rKLweFC8UfsSRnKqTvLNCCv2XUBvB724F62tmLgETmWo1FMdeSNMMQ",
"https://www.pond0x.com/swap/solana?ref=HeXft49KLeYfLQhu94Je8XVtEa7biRR3eboWBgq78Uv6VBuqKvTkt8HXwwrQ",
"https://www.pond0x.com/swap/solana?ref=HeXhwzJBeqhE3cLUgGVgBpNBF8sBC2EhWGBPEnV8L8ZHLqs32j2hJAqMst2C",
"https://www.pond0x.com/swap/solana?ref=Hez5TDTsxh1KFvSdfCYSv8tEAnGZ2oHXE7zbhhZsXYeFms6LvsF6nJCua5kE",
"https://www.pond0x.com/swap/solana?ref=Hfs6PPd9jXsuhyquEgqSqNZH3sZV5YseyAx16UKmrA3oDjgWa861LhUkzuTm",
"https://www.pond0x.com/swap/solana?ref=Hg5N6fHqSyugvxb2ZUTDNpSS3oKgfkUDyYf7F2j6sufe6pKzzEfe6YSHV7wY",
"https://www.pond0x.com/swap/solana?ref=HgF1MvBCja6ZBG2VkS1xGZdW4H3NuTJa1joQP42ZgPRfNVqqHpdVZ5vMTsHj",
"https://www.pond0x.com/swap/solana?ref=HgPUDgJf1tH9iGzfXdMB6xt9T1CQQpyzKGRVzTASjCJ8zumyyKAfFVKpFEFS",
"https://www.pond0x.com/swap/solana?ref=HgynQQbj6D6Z48HW8EhWh7RBCptS14Fh5m4AqjoJ6f4ABHoZCXGWJjRt54cE",
"https://www.pond0x.com/swap/solana?ref=Hh3TTCRq3LaoiSKNa3dBQraUMPiVckoeginYWb6Tofh6G3AphSvUoxXzJJiM",
"https://www.pond0x.com/swap/solana?ref=HhFjvxKvWDTk87UfzYiKfzhBbysTHsHgTsbVssV89LJ3RP9ZbM5ym1gFJ13S",
"https://www.pond0x.com/swap/solana?ref=HhGeBAzPWSasB1gcXQvDJoiSrjb7SA9bcEv2kJgquLf9AmNq2uMSf2jZy8Pj",
"https://www.pond0x.com/swap/solana?ref=HhGKjAHnpvEEE246viKNohNXR889irQCFsGUSENGXosyevnAY6Z2iEqJpmqm",
"https://www.pond0x.com/swap/solana?ref=HhGmjnV2zW5tz7s6Yv2KeUVTaZTmU4EepyKiBezmiDzmR2DXoCt3So1YePeS",
"https://www.pond0x.com/swap/solana?ref=HhKwqNJPCpFDWeGzVughcYe4og1acjm4PEEhJqczDSJbodXqh8Wc5Z65ELEq",
"https://www.pond0x.com/swap/solana?ref=HhM5TVn5cE6CGdMdSE7iSAjAdrR6JpJ81bhpisESL1YEomjwiV8G4uLgkYL5",
"https://www.pond0x.com/swap/solana?ref=HhR4zVskGDkNvGBQFhv8ZofwANioN9rcvk4oC3JAgyznAad5qmE3wzZ7R3jQ",
"https://www.pond0x.com/swap/solana?ref=Hi1birBpJyfP39ZpjhtbFXbeRThZVJfXcPLdQv18rcW9C5rkcBiJ6uRJGNMH",
"https://www.pond0x.com/swap/solana?ref=Hi5e5g7vutBuRiBoiJ7nKUj4vkURHPDwDeEBuvW68JXdSMedF1ZU4u7QSfRG",
"https://www.pond0x.com/swap/solana?ref=HiadU997LPFnJfjG193QpauuRDYBiUcSAy8Tkr22pC3Q1gNC3g2d2kSZi7rz",
"https://www.pond0x.com/swap/solana?ref=HiE2yRMeHN4hQYikHfsb7Qpsqr3srpBsBu7pRWPrpgoEffzftkUFCCdV89jt",
"https://www.pond0x.com/swap/solana?ref=HiE3veZVdFZotmrArj7rJXUyHZCDGfd5sYTXMoLXqNhjSaSHtseDbjL4QV1U",
"https://www.pond0x.com/swap/solana?ref=HiEKQYfQeyVDUskGzn7Ut6oZ5BYmopCBEJvfCifTVptfgZXcDXSCm9NoPBim",
"https://www.pond0x.com/swap/solana?ref=HifgYuPUj6tgysg7qBMmpsQDGFYzVyFVHSomHxkYKqGPpHgGnvQ232hFSiML",
"https://www.pond0x.com/swap/solana?ref=HiokJiBZjMj1uW87zrwco8YA9jNP1uRpzjNqS58wjqX1aCjNAbkhV5cf1WEq",
"https://www.pond0x.com/swap/solana?ref=HioUi3QRbCP5rcfGA21eqdMbmVVm7uk4UfVpx4PzKQTry5GMeJQDm4x8qEZc",
"https://www.pond0x.com/swap/solana?ref=Hix4D6H851m5pmaxaHAMS6L56BcfTXTVVAMdiWx6b4tovniY7QgXZ57XmoVa",
"https://www.pond0x.com/swap/solana?ref=Hj6ZqD6NEPmNQxc81jaD4HdHo1teTsB7iRk5ePyCWxvQ1oGmCHhzKXAvGgcq",
"https://www.pond0x.com/swap/solana?ref=HjBMm8SxooJra5Xrar8QDSdGTikQPp56R4fT4zjfcHmk9MWTbBCJwCHmQdAq",
"https://www.pond0x.com/swap/solana?ref=HjgiNrkmFBUZHcTEfrP4qtUBeBbnVJpA5S8kE2ZfRWkQ44pHHo1F3pkZfeoV",
"https://www.pond0x.com/swap/solana?ref=HjgoA2LFcjkQZ9PwugwsXEsGuufY5vBiFfAFuysVxj9mnhqTXCQnFLg43dRv",
"https://www.pond0x.com/swap/solana?ref=HjKMU4GjvMc3Pa6cyjRDnJ4YmYRb6xvrnaTkUKz7gLq323ddKQt46oeVSrRf",
"https://www.pond0x.com/swap/solana?ref=HjZEes4nyCN32PKiG61jaDrD2efoKVaq6vhyBcgMgkiXDzZKVsM8fQLCioZ2",
"https://www.pond0x.com/swap/solana?ref=HKcA475BT2oBvjH9dkv5qL18iDZZ2NTQjmH3Mc4wHxLTFyvDp44aRzorQmGz",
"https://www.pond0x.com/swap/solana?ref=HKmAgwYQUBUx8VxiWiEjajo1oM9WspDjoaVYyyPTzvu8G8NW1KznUyqdvqM4",
"https://www.pond0x.com/swap/solana?ref=HKmGeArcKLTcDyV1qYWNKBXKGUWnP4R9QxidaZgpx4zbxys1GgmrcaNMvsus",
"https://www.pond0x.com/swap/solana?ref=HKuGFNXLriZ77sxfCL12WjUFUPDxExyb3TvPVSPncJp2frdL9AYiEEY6yXNm",
"https://www.pond0x.com/swap/solana?ref=HKyPRNxFvdjXpGvH2C5ZHWRrzAJYGkNhZ9j9kX13FPMhCoyY1MddMHMDWX7M",
"https://www.pond0x.com/swap/solana?ref=HL3C51XbF1YvidQ3NbVdKj9tWJDXhk77uPUpSPhq6xeozGQSZugyk1wGvi6H",
"https://www.pond0x.com/swap/solana?ref=HL4D6Cx9PVktXDgdXoaQ4uKUfTTn7N9XBuUTMhbB8bA67PMobN5bf6F2QU9g",
"https://www.pond0x.com/swap/solana?ref=HL7XepzKNSnk8Hr8CnHCaYSYphDLN949Zo9FHYJqtsmgducQN5tqkcBhe8pE",
"https://www.pond0x.com/swap/solana?ref=HL7ykFSDyDgBfSswkEG7kF3GazChsfhsooDExxUzUq59FxLt49ovTqu9zh8S",
"https://www.pond0x.com/swap/solana?ref=HLik1LiqqxZxp914hqzqbLbzpLDDE3F6iLYeGiuUjDJ3GUAWgEX6RNVdvbQc",
"https://www.pond0x.com/swap/solana?ref=HLsEhQmsRRZGyiT6YDs1dwLdtasrbkwgc7HX2n6q6igaWRXa3aQqhT7ijH3n",
"https://www.pond0x.com/swap/solana?ref=HLzmQUmYaUnMvx1bLHBpujLBwVycvqv2Q4a52XHLubNov9dA6K7uvbZuCdBh",
"https://www.pond0x.com/swap/solana?ref=HM1Xw4SuGdbQDpG8qDe25NmvLJua5rmncqcGHEPvBDwwzDn9ErruFBv8wpPu",
"https://www.pond0x.com/swap/solana?ref=HM69CZYe1tYrQ2MsJR8mczeZKqft7DHtMU3YG1wNJ2aCAv7ix2LDR2y4Ew1b",
"https://www.pond0x.com/swap/solana?ref=HMAVbWofXDYf19bdKbyZK8Qvq8WKHuL8XJj4KLDqBKXnkXZzzEaYUbn9n8fp",
"https://www.pond0x.com/swap/solana?ref=HMbL3JarrnjvtzyZjWzJf7nwUNmNgRBV8GMydm29vHRqWf98kDrFKopQ7PPK",
"https://www.pond0x.com/swap/solana?ref=HMbRvaBuNMwarspZP4ViFo1Q5x2Bp4Q9Xrgj96Crj7TU24vYbuvHSMp8M9fN",
"https://www.pond0x.com/swap/solana?ref=HMfdjWcf9FnDP9Kvr5f88FJpjJM8TjFKAohhhDEqdotW8PakgHLDR5qkMedA",
"https://www.pond0x.com/swap/solana?ref=HMfJcfmcBx4HKKCibD2aXd2yG72hgHqq5owZGXhLMBiV6BVH92rtnVPQ8p9z",
"https://www.pond0x.com/swap/solana?ref=HMNMxzNbv2oADM4QzGFtTYDAMCJNmk8yPz9rN3zVdKC3uBKPQAZHfb2ey3g9",
"https://www.pond0x.com/swap/solana?ref=HMxeE289JYyWpKqR3Mie6pwnPaRJWeKfgEu8aCGvibeg6qivfXt2Swf8kn5M",
"https://www.pond0x.com/swap/solana?ref=HN3astr1XrQQcwvp2TnoTScZNEQ5jtCKSqLfU5pz3Hw9X6i9LrqUWZNyxa9C",
"https://www.pond0x.com/swap/solana?ref=HN3P86d4JXfLZ1PZGCaxnF1UmSvPBihAhFiWarDcsYQzXL8AA2WgLy6RL7QE",
"https://www.pond0x.com/swap/solana?ref=HN82JnTobsfqxPn4MGtykURrBkSqk2Apox1fZmwGZJhioYmw2bF56NxqXFiy",
"https://www.pond0x.com/swap/solana?ref=HP4MtbuyRTFFgsZr7c8gbVSK2MquTYwaXyC5VKXnmJGbKAqxAf5iKh6prVjh",
"https://www.pond0x.com/swap/solana?ref=HP5WwREJfP4vhaL9MeWqTqSLTNWnMJqJU6h7Yqkbn1jZ38L57wAWPfUAqoxN",
"https://www.pond0x.com/swap/solana?ref=HP5Yo5oDpj8dUspSJGaxrsuk8JDZvkENee3HmHJ4UmJEp7RSSvTPaKP4Uzcw",
"https://www.pond0x.com/swap/solana?ref=HPb666BtBKPDTLus1aysjYrDGQciB7mdTLSsh3df3FRvPtJdk5AWPrEycicm",
"https://www.pond0x.com/swap/solana?ref=HPfCDpAwPQsbfLWtWvbTFgqwvrEH4xAroifAhKFeJZFwhjrfKhYvLWCyk4ze",
"https://www.pond0x.com/swap/solana?ref=HPjghTeWTSGjfAA6HmZMC8HLqc5m77mXv7D1TeciUjnwf99zxCbD9K1izN7k",
"https://www.pond0x.com/swap/solana?ref=HPk2sH6jrRk15c4bsC1aGA6ws8oE5iAnv67C6y9Qwi5vZFojxQp7A7FPLFV6",
"https://www.pond0x.com/swap/solana?ref=HPMqcAtGX3k38r3EaKqGS6qUHVxxzaxiawxJR6NeSPHinfyimALqmZMVkb8K",
"https://www.pond0x.com/swap/solana?ref=HPpB6GEquGdKkMXP5vFNqJNBp5buwc4JeUwXi3kP8mQ9QXiyEpxCJLY86swk",
"https://www.pond0x.com/swap/solana?ref=HPpGfWivT9HtXgYc65yTqY3n3im4rwjtaGPEgjgMWZEdrtUPs8SeiqgK6aTZ",
"https://www.pond0x.com/swap/solana?ref=HPSH3szQJPsLzMy7BeVeA3urYJ5zBUN4TjQFoa5Y6qA8iA65kfTV7etk2gJ5",
"https://www.pond0x.com/swap/solana?ref=HPx4vYYA2r9ytbncRqNyZpPoB9tBDWHZ37NyBPRXyChV9x1pto1NGn1RHrta",
"https://www.pond0x.com/swap/solana?ref=HQ1wX95ESGYYV3Qhw29zjrFtofdp3nnzSN4JXoyu299iboDXoGtmNvGYuGby",
"https://www.pond0x.com/swap/solana?ref=HQ2zP9BWmM9Uoeu4cqJmyFVuWujAUKqUwie2V9wUA7Y3WJ4DicENHWsjDiGp",
"https://www.pond0x.com/swap/solana?ref=HQcCbYTnEyUSUb6n2ztL4rXpBcMRLniKU7jZUteZUEANvRG6oX9jG8EqcNCX",
"https://www.pond0x.com/swap/solana?ref=HQLAUW6TgF96UvMAQAQsPxhKXNuGczkf3rcudzuMHMQzq45M9Snx39mHCjAD",
"https://www.pond0x.com/swap/solana?ref=HQpz4KAFXr8xd9gaVX4ZGvnyBdwTBPD2vNdt4DuTk3cucCRwvGeMdWPpu2Tz",
"https://www.pond0x.com/swap/solana?ref=HQQBdbE3P3gL9Dhx2buKREbSpq9Y2sU35z6yihgnuNfz4X3NZsDLXLwja7n9",
"https://www.pond0x.com/swap/solana?ref=HQUg6cvFBynDjYyi2sgs4aeRSWZR1snJh32pRkqgooWKb8weCXbnJ38EKt2A",
"https://www.pond0x.com/swap/solana?ref=HQXvzTzFY68Cxwx5rYXToun1gSzF78jR2AUL6X44VBCb1hAKLHek1JKrRdmR",
"https://www.pond0x.com/swap/solana?ref=Hyq4yqNCF5jpXGPHCkcoJJDdrhN1cjMGuUbix3YuAzeqde2mj4TrKvXKYqa1",
"https://www.pond0x.com/swap/solana?ref=HyqU9iiR7wXaH2PoSyefqpTtJ7VAG5DR8d11G9esnJaQ2BLxnHGoUSwUJxpU",
"https://www.pond0x.com/swap/solana?ref=HyUA9R8ebhnEiTzwT2b7n6gn9Vjm7uDmKTTVpQ36dWfhiU4JWKxxT38pcQ8r",
"https://www.pond0x.com/swap/solana?ref=HyUmypKpfJzBNct1pxivLmPHeQ7rJ6NUKPmRm9eX2V6GJTt8LnAdK2BqAzVk",
"https://www.pond0x.com/swap/solana?ref=HzeqYD6saaZqjUEeWJW1H9CXZSRB6u1q53Fdi64fv941paS6RaGrZEBvY8er",
"https://www.pond0x.com/swap/solana?ref=Hzih3rpYozC1W2HVeeTsotd6QsA4d9m2kGHuHA3Eiui8hXTbn66jVJjk4SKn",
"https://www.pond0x.com/swap/solana?ref=HzncdeS5yfKhCv4gmKJdapiaBqT22pxtgKdh3K8m4qYHkSryaXtHfFCEp8fM",
"https://www.pond0x.com/swap/solana?ref=Hzno64MusiMs8spMPAmTEzYPje8izXw1ad8EAP68XukYVgB3tHahcYfwX8Uy",
"https://www.pond0x.com/swap/solana?ref=J1AE9uSpFL2iavRSrrkVi8fNFvpYPqNDcHFGEwN1DooB51bShPcuwa677zGU",
"https://www.pond0x.com/swap/solana?ref=J1AvdqjGT1qrqazR9MwhyHHDTQAPLpFtA2eqxAz9jXQo8HHgXxduiHyKmMqf",
"https://www.pond0x.com/swap/solana?ref=J1Jmgix1A3vGNohD67U892nBWLrHJXxtWgVWJdRvRm6RueQdb3WsE1d6j3AT",
"https://www.pond0x.com/swap/solana?ref=J1JYCTKT1hXqCfUhXZQNHw5EFxQrtcrna3ypUjPnXskVFZETRgrkyv2ztEAd",
"https://www.pond0x.com/swap/solana?ref=J1u5pn517aqnRF5gkTKv4rc82L4m41rx4Em8iS3MVYzi1H7tNdf6dX7pjSz7",
"https://www.pond0x.com/swap/solana?ref=J1XX72GiXqYu8kKd1MHJwWJsB25mmzrytLW2BJWMG7cUwEZKA5GVfyj9wpjJ",
"https://www.pond0x.com/swap/solana?ref=J1yABRejvXR1iinhkihnoaRn6HHV9TvYNUnxu5L9WUXemxH9bNFYqwgeo112",
"https://www.pond0x.com/swap/solana?ref=J27nd6dRkmkNkoYszaMbRnNYomHj6Az3Qwoizm6UYBL5sTzXYvQwYGLaQ2Ks",
"https://www.pond0x.com/swap/solana?ref=J2BoeLZrdsgn7QtM1giHbRYu1xFibTZTf7nSuSpdFAaacu6xmCf2DC596cmA",
"https://www.pond0x.com/swap/solana?ref=J2GfMbZTCn3oCghhzky8FuUGLVF2Hs7x5sKPbZsgvjBbjSJNNNCvi9VZ62nv",
"https://www.pond0x.com/swap/solana?ref=J2H5iCawpj6FVJBnLBPG5nKEvyse7yK3NLQbeRZwvvSpYjSH1T7aa2LB8utW",
"https://www.pond0x.com/swap/solana?ref=J2nKabtHGsRQ7887mXrSqpFPs9W1dsidUHQ8Q6cBEQNQq8fNYQrMNS4Uj7Vg",
"https://www.pond0x.com/swap/solana?ref=J31c3hRW2RPkgRoMcBxWkPyZd7f1tbexQGUZ9jXfPsLhaHU9tNpGDMzn2Hf2",
"https://www.pond0x.com/swap/solana?ref=J39tGoX11m7fqtfk4C6Roukbd2C1q4jZTg2vc4yFJ3dXm7Pu8cA2fDccFujw",
"https://www.pond0x.com/swap/solana?ref=J3pYBb1FEhKDjrCgQHxXMJQBSifoztLhixF8JEwZubHXqCCkNANDQNaLJZHJ",
"https://www.pond0x.com/swap/solana?ref=J3Sd58wv9szFRRTrzT3cuRGU5WCJfpqPgVVri4pgHuu66JjjQxDjqaCKEvHP",
"https://www.pond0x.com/swap/solana?ref=J3SPXnjkse8upQX5nmggv8sRw18eVoRLktofu2FYLpKyeZ94qUXSYHHub2EC",
"https://www.pond0x.com/swap/solana?ref=J3SudG3HvB6r97z9UWY9MGejqhhkVwWmoVmWXNEVRarREAtdNKTfGcX3X4KT",
"https://www.pond0x.com/swap/solana?ref=J3szPsPf8qerorav8Z2TSHm9AY5Z3orNo7Fc3P2ZSNN53RbXyngrvFbLuiYQ",
"https://www.pond0x.com/swap/solana?ref=J3y8fWPGMvQvpz7PFAAAVth3j3LLSb7a2cdRnzqcwVFqDCa8QP1Ynnb1hrzw",
"https://www.pond0x.com/swap/solana?ref=J4Bap2QEdYXrBZ8B7ZR78X9KTKzs1eGwsMhfPVpi8Pcxrrkf8PidppAx9FuX",
"https://www.pond0x.com/swap/solana?ref=J4BYkg2xEUihZ3mRceSuwLtqjP8Mhvu953Lr9mUTG7rTTdUVip6BfcgvXtTy",
"https://www.pond0x.com/swap/solana?ref=J4C2prmtQikUdp7ifX1seabRmbAKeWaKgtT85U5YJQuq2Mix1PBh7BjyfBSA",
"https://www.pond0x.com/swap/solana?ref=J4LAQoHoBMJq55UxkPKcDhG2iTyqdeeAV76hPJQAv8FteRJfGK9d5s35snAC",
"https://www.pond0x.com/swap/solana?ref=J4V68nmeWK5or6jo3agtUb83WNyZ5Wa41SJQfEe3z9arw7DSVYFF7aAGecSP",
"https://www.pond0x.com/swap/solana?ref=Jd3FrakeEUKinNMcnr6fDEPqzKqgrRWhNzYbzNXFyQXCZsyG2wbepFXhWCgD",
"https://www.pond0x.com/swap/solana?ref=JdB9aXFhrVrZkDZE9WVByXmqQfn3UezWARFKEBn9ASgM8VBVh5WpLNhTvkVf",
"https://www.pond0x.com/swap/solana?ref=JdLfPai3fgxhCG5dBLVECv2sRr9oUQ2z9hfaC5jwewPJt887Q4qST37vDarV",
"https://www.pond0x.com/swap/solana?ref=JebYSGa7qcDnEvt9iQP611V8EqGhVvsKGQkZHhMf6CsVXN6GAPi2artbVLoi",
"https://www.pond0x.com/swap/solana?ref=JeoRkyW6Ng3jxcLKP45pSPPNeNu5ppuSyNwjungGqX5GbSu1aa1zsNz3y1p4",
"https://www.pond0x.com/swap/solana?ref=JeRnQQFuENWMVuujTVdwFqgosJooce8NvVosmsxHkxdBKJGaofNYbs9TZh7f",
"https://www.pond0x.com/swap/solana?ref=Jf2Si12iheUffsHngX5xrof58xuRahdU3R67aVhKFyVZ1hMBDHLzWC8n1m8E",
"https://www.pond0x.com/swap/solana?ref=Jf6sNLHhxagXEgSXJ7n92KM5d4z6nHNqFxnuyXtpJ7oy3Cn82PGxwD68gTyx",
"https://www.pond0x.com/swap/solana?ref=JfggPENDjB5awcS4aMFRJjAmiafXawifBhj1AoNYh3TgDzcmsKB31J7DD9oA",
"https://www.pond0x.com/swap/solana?ref=JfgkFQYQexRQkBWf5Zuh9th4A23eEGrnRaKJJAsKXDP5wcvH8akxG1KeX1GD",
"https://www.pond0x.com/swap/solana?ref=JfgwpWKhe9QvYNcY2Fw2Mothtz8oQGCMQiwevQDnnVQdJd4kuY9kmQjBwTxN",
"https://www.pond0x.com/swap/solana?ref=JfkxKCbqkqbrRwWGALR4h5GrK4ivTojAVG6zhSQ2VQJ9btyf2buDMbhbEY2U",
"https://www.pond0x.com/swap/solana?ref=JfLEfXorw6cd8RzGGgXi7JdfP7RMcSjQFw9LiT8exmeBxkAQTyRHDnKgc8h2",
"https://www.pond0x.com/swap/solana?ref=JfmLa6EnjJu2zmzJDwgcX3zR3nL9xVEYX8swyQfKKGxNgfxchdXF1m48oBdt",
"https://www.pond0x.com/swap/solana?ref=JfvFPehsPK8yogPZKhYozfFD4EvX8BqooKWnqMw8qnixZXqFqynQtjdNtzwr",
"https://www.pond0x.com/swap/solana?ref=JfYMRqw4B3Sj88H8BTB1FUUUjdv2hJZr4hHmGsq3QSn62p2J4XLPmA8G7GCu",
"https://www.pond0x.com/swap/solana?ref=JfYYxn1eXiULSew4Fgk1SK6uNPW3RuUPvviaM44W1SrJdTaavERPAKkWr1AF",
"https://www.pond0x.com/swap/solana?ref=JfzaFLZia3sF6favnvz5V5mCX6Nd5wkRuuMsZfwmbSUN6LN7T5i4w3vCaD5s",
"https://www.pond0x.com/swap/solana?ref=Jga7tytEFUiZRduKhdkyn5JprDKQ5ExBiJpGSZYG1VrRE7fL4CuV6bbuXANC",
"https://www.pond0x.com/swap/solana?ref=JgeYCTwYAuRBdcPBTwHpmXPgRKiaSsLxewPQMnn1Ht33mcdihWiaZCyKjtMr",
"https://www.pond0x.com/swap/solana?ref=JgsoujAqUhVgxsMfbxxowj5nKdiCGivGpNmqHt5Kk73HchqwKoaTPUmnDhDY",
"https://www.pond0x.com/swap/solana?ref=JgWDPopZrL3dBgxsw7AEGreNVzGYSGhqkneAwhnLdZVA8hTuTipHbJqVJEue",
"https://www.pond0x.com/swap/solana?ref=JhfoaDrDyXHLfugYCKJNkjS4BFRQTCgbug5EWaah5mdc3ybZDDTAtb7Nz91S",
"https://www.pond0x.com/swap/solana?ref=JhkNt6huN5WvWhQAEZ5Zy9CFvdUZkSsADGNcvBRXB5J7FDMm3FBZen8Y8Sth",
"https://www.pond0x.com/swap/solana?ref=JhtivS87vJhAiCHqPZsjH9Lf4Wawz7jMQYGZt2jdREZwcqeZJ8o7GoMa9tUz",
"https://www.pond0x.com/swap/solana?ref=Jhu2FjSn9McghSKkNqjFw5xBL6ecfgjzy4qjPrvHv5Jr7ByB4wr6mU4cn3ZK",
"https://www.pond0x.com/swap/solana?ref=JhYM5559kW9cr2Cmgho6ETfUdH59poMWaLZwF8UVZvEZhQYu2fi4eAwdWP4j",
"https://www.pond0x.com/swap/solana?ref=JiGSAVhtfh1bctQ6Z868Qk1vy1auM1RkxPkVZvFgtGri4asP1GH3pMUCMtXo",
"https://www.pond0x.com/swap/solana?ref=JiME7xY65EtdvwHXgNQEDPJN2EVERVFq9CMGko8vtRAjc92jRPNjxUiv3SAw",
"https://www.pond0x.com/swap/solana?ref=JJC4ZSzBiV5Q3u8ecKZWHGXGVCiDvMURuxPzJji8SHA2vfo9ZyKDiFeW4rJk",
"https://www.pond0x.com/swap/solana?ref=JJcbLv8cnhqQ5uozrowV79ipnUVz1EaLVPhZXEbYmep9FfpCY9yARhrEoYsT",
"https://www.pond0x.com/swap/solana?ref=JJhJQZxTkrPRwy9xZi4dPh9PMHJ9Rf5f2ay9K3dv5xeYz4qHKGsH3nH8wciM",
"https://www.pond0x.com/swap/solana?ref=JJQG2rPKyiN4DCZr1vDb1x9KDjF5NdsA3T68L8cA9xEcHNkUGNENFYw6fsVf",
"https://www.pond0x.com/swap/solana?ref=JKemx5kR8VaLJ5srV6nTR9WBupaJHfPKuCqgTPfovbFsW48xWWQGjmRJ3d5E",
"https://www.pond0x.com/swap/solana?ref=JKj3i9SwzSkw2Abp1EephFhVC4RK6GzZNNEhH9tdrbKQvGrgQ5t2Km64yZ8u",
"https://www.pond0x.com/swap/solana?ref=JKMrTv8Ete4ejrzFEZAjurKt2tb7vkmRG3DRVt3mfJp7sxa1NG5ujas1cHcG",
"https://www.pond0x.com/swap/solana?ref=JL2qcak9yCA9rotuaE3ZuRENTS5pcK1SQJw1fxBPjsWkXkiWJErNzVqEDJHe",
"https://www.pond0x.com/swap/solana?ref=JL77Mb64yz5qzuabZ5WYarURMDJrwqZKjVsrAhho2bDfQL1XbAPZ4RyBkAUK",
"https://www.pond0x.com/swap/solana?ref=JLgxazHSjdyGd3nmpxMhyvkYpoFm8iBGWgpGLbwDHebuBFmUSLDRA1t4mJsr",
"https://www.pond0x.com/swap/solana?ref=JLh2SGdLDUxron48kKYPHZTjnmpHRtModFwexv2pU3ygofdBKHusdddF8mtx",
"https://www.pond0x.com/swap/solana?ref=JLh3KaA1DRVJCB4g321RVJxvBqK22tHqPP35by8orqt2RSrzTqks4EVdBjif",
"https://www.pond0x.com/swap/solana?ref=JLP23sUTXTBxJweo1Wqg815ACS8zvfSDRe4o4WuM9SML4iChmXCzGg1KBU3h",
"https://www.pond0x.com/swap/solana?ref=JLTjjmGwSi93WCR9RXpJpcu9VDq9R7t8mCBb5ziF6CSBNTi86YiaiKqtnbFy",
"https://www.pond0x.com/swap/solana?ref=JLUAAGtLqoUUpFRcj25U3xXH7m8eH1yL6W14hxZ1n24ioodZdG7ccNxZesCC",
"https://www.pond0x.com/swap/solana?ref=JM3jiEbXFvXTkw8uvU69gRUZ9wkGKhxJEAyWqBo6aFh6a9hXvcg568PVRtyE",
"https://www.pond0x.com/swap/solana?ref=JMeKKttDJCctKBtQchTcL5ggUWTU98czT5KwZGMrrxjtnqaa13Toc34ajhFe",
"https://www.pond0x.com/swap/solana?ref=JMwxYpYuaTYqRJVaxoMnrm7oyUYyuCsD77STqB7PNAFpqstb8vH6c7SNi4M3",
"https://www.pond0x.com/swap/solana?ref=JNA1WXTijy4CgvurNc5EgcGpgugueS1791uEqzYAUbQ5CuoZk4xZiRVPem9o",
"https://www.pond0x.com/swap/solana?ref=JNDxuTZmhzFoDUg2ue2bJc8WY3c39qhj5eAJ17kjrp2pVgHBCEtaCM37WuRA",
"https://www.pond0x.com/swap/solana?ref=JNk59jjBNEC8isYcyCdXCH7vhfidKZGM2Bkxj9wkLWMcBqAYLAo4AHUmrX6r",
"https://www.pond0x.com/swap/solana?ref=JNp6Qzei1n1MpLKAoQcE6LQaWVnkYDoPo9buoocCQU1SaYVYLsL79V9gu79Z",
"https://www.pond0x.com/swap/solana?ref=JNuUxL18zTFBDcK6B59qFZAiHgzuYvCnogXPWfPUpEXfdxAGgmG1ezP1jJST",
"https://www.pond0x.com/swap/solana?ref=JNxew4rpEbjMuSHufw19sRDCR3aaGLZNQUHuzLvNB6GnjAnvQUNHWk2efa7n",
"https://www.pond0x.com/swap/solana?ref=JNxZD2Xj7X6nsjcbz2jv4yv11vD1APSBEG3v4ChwYiWJS6pVPbYEZu2FyEUT",
"https://www.pond0x.com/swap/solana?ref=JP7kR66x6YyYuCcp1Nzhke7v4ceJCnJfQapTWh5U61KFbjcU4wJy9hQSTBNU",
"https://www.pond0x.com/swap/solana?ref=JPCQYMzB62XbUemm1oWFh7SrWRMBuPRMcUnN5krZ5Xte364C4CePL6JRFsYm",
"https://www.pond0x.com/swap/solana?ref=JPM8kmwuDxARCuMe2X41yThndhywbWsugXVCbXCHG31bdpTyhHCQHR17NeBP",
"https://www.pond0x.com/swap/solana?ref=JPRPWi6Me4p8mCDb9v2DtWHHP4HwTnYEZ2NwJ6DaDXKFq9LY432pLG2UW1Ab",
"https://www.pond0x.com/swap/solana?ref=JPUp6fJZFDkctczJfyKnA1hns34XxMvp8Gaucj2255VF4JVw9EJycXQhk5mh",
"https://www.pond0x.com/swap/solana?ref=JPUVjvsK5rP2p7JysKy9m5YHnsJD3JjxiADT1mARFKmMfKNujMwBFcjQuq4z",
"https://www.pond0x.com/swap/solana?ref=Jwq7VSzwRFmckzRm9M5ri7axG45K1nZsLxf4fNZbpXCNoStJX3uDnRoWTshM",
"https://www.pond0x.com/swap/solana?ref=Jwtfj6zJyQMqsGP6Za84ccfdqhGAESrnCa9rEGEGUKVz1ad9ej3rLwNAiTaq",
"https://www.pond0x.com/swap/solana?ref=JwtjMeRt7uD8sNaJLMR2s6J1K7BsS3Z9zV8zsYpHVfQdw4N7Xi2x82r2bQsU",
"https://www.pond0x.com/swap/solana?ref=JwtkWVoAnNSSKowZ71pmdoMyGGsW2PGhBMD8v7WJSUEbec8iZDgfncwJZvXA",
"https://www.pond0x.com/swap/solana?ref=JwtqLkraDtTzJzLp3sTSwnRFPjRJPpegMbbJJrB6iTYZLq2sffTNfTDxJcZw",
"https://www.pond0x.com/swap/solana?ref=JwtW1UbAUny6PaNnixJCK6tVo7PuqReErZqgpPqWvPR7MFoMVemZxL9UEa8y",
"https://www.pond0x.com/swap/solana?ref=JxFnE6G48agzRuaLS3zaP8Mk7bUBApAG9e56kTYV5cuXczUf4zQfi2cnn8Wt",
"https://www.pond0x.com/swap/solana?ref=JxFs14ikUzK741RY9pz2tavWgS4yJw3fMT4EBRPFGtSWi1giaiA5Jnnjme8h",
"https://www.pond0x.com/swap/solana?ref=JxR7ApTVBRXub8eR9sVBVbaFtBrAm2YJNzrXuqMG4WmCmv31KNTRVZHHWgdX",
"https://www.pond0x.com/swap/solana?ref=Jy5XcSxe92jx6TL3JHwf7Euqg1gpGhfMvpsmF4ok9Y2XqYG5j7vurWMYW2xS",
"https://www.pond0x.com/swap/solana?ref=JyN7kpNVdAx566QBKsJkrYFvSHPkQD6cBAtzeHYgDuNbornYAs7WnJ9gTrA9",
"https://www.pond0x.com/swap/solana?ref=JyNHVKLxj5oU96HYSCPc6W6Ree6VRHhnqafzqd2EUYgqeJA9NeLyTH688aqA",
"https://www.pond0x.com/swap/solana?ref=JyoSyZAwLVyyQ7TBD7BynyjoLUYKhvFhUqJigtXS4F8wKA8An1TkjeEqjJzm",
"https://www.pond0x.com/swap/solana?ref=JyWnx1K3QTVU6chxatU5RrzV2Y1VPMVjMoxipqTcyXetb4xcX6xvXMWePi4R",
"https://www.pond0x.com/swap/solana?ref=Jyxo9Pd9yim7ZpBz2ZxY5Y8wdPB48QkCZSZf2v3PnH66nD2p7LVTVJZWBhTq",
"https://www.pond0x.com/swap/solana?ref=JzAuvAgJVBMQKTVFgSXaVCpGZp2RBDMW7LFwT8wJsNC8jKCiu85vLb4GqNPg",
"https://www.pond0x.com/swap/solana?ref=Jzd8n3zkT6Mj6PQbTFr28sCr3c3wZrK5cqgptvP2QXSH9AXyu1V3hCYwHnKF",
"https://www.pond0x.com/swap/solana?ref=JzdVup3i8pSsRy4rXPP6Vwfhq6xV3SZnLa2dCYfzvhvVoVvCZh6wtGvpMzD6",
"https://www.pond0x.com/swap/solana?ref=Jzn8UjdNHfXMMtHZsUbtfRBGh5sCUJMtcY1TcCxLAbBMuxFyEe3rg7mDhBnR",
"https://www.pond0x.com/swap/solana?ref=JzUayBrX7nV3EU2gtHxesoZNKJPr1pTv7uP7VQXK6gkyUtKREhk8mK4Njxse",
"https://www.pond0x.com/swap/solana?ref=JzYJu9RKDd2DZTBkVRVCPr4rk9TxDCwD7WjiC8MxgxGyFL14889gESDY4YdD",
"https://www.pond0x.com/swap/solana?ref=JzZDERYs7YLzrQJuyho1iLiZej9E64Zwmn4Kw8Vm3p2dQP25Uzm1mgCBXTDU",
"https://www.pond0x.com/swap/solana?ref=K1j6puYhi48NGE1teEpvrbjbfNvYLJoU4mkNnNKNH7YTQbsnnZMhRTEUu8Ja",
"https://www.pond0x.com/swap/solana?ref=K1W5sQSegcCYVWqckifYAMCfb1SSGsFf5oTS1kYotccRWprmSdE127NCMvX3",
"https://www.pond0x.com/swap/solana?ref=K2Eo66n57Zq5Z73a9UzZWxE8aLYPk7kPejMeUGGNVHFTN72WAhYP6jnfGfEm",
"https://www.pond0x.com/swap/solana?ref=K2gm5Uacic6aFXBhssFQWdJ8e22Dob38fmVsYizfgGsahJivsSdJamQQ9HBo",
"https://www.pond0x.com/swap/solana?ref=K2koXZhkiJpNh29DsSFMxkQikKuv6ma6z2hVhykMN5KcoaqumFEsTRMRNpZj",
"https://www.pond0x.com/swap/solana?ref=K2mPPvSwyktc1sFyhgqNEbYyXpkY7uVzGkf37jAkTHMzg3p68xVmqmSTAkD6",
"https://www.pond0x.com/swap/solana?ref=K2TqujEiPWXQLkwznrJvYn9KAzPRJB1oNBRY8RUro1VkARfprKii4RPL6CMb",
"https://www.pond0x.com/swap/solana?ref=K2uESArks78FD1ckqYSBYFJembFHXFufSPjx3BnJrkggjG1NMfFEiukXb89G",
"https://www.pond0x.com/swap/solana?ref=K2XqGsBsStp7jmq1dcaHEqSjVkHNAjmEYf9pb71bFkp3BJUwRhhUGkZYqqyu",
"https://www.pond0x.com/swap/solana?ref=K2Y9frrCpqiv6BQqieCG2FLUo1gxXiFy8bKDWmDsQbqWMhWKFbukud5hrVDj",
"https://www.pond0x.com/swap/solana?ref=K2yFZ4Hcrq3TbzpYCNtUFu2FK6AhzXtXy75oQN8iyuGpBhZgM3uDk7DxbtPB",
"https://www.pond0x.com/swap/solana?ref=K2YihJ9YCxPH7fgaVZHsi4Q8EK32Rx89eyX4K4zbtaYz6S89NuAEDYSRNix7",
"https://www.pond0x.com/swap/solana?ref=K2z7quN6kD8YVM1ib9SZSt8fPtPsQS25ooUzWmcEwAWSxQiDF81EX2qb3x17",
"https://www.pond0x.com/swap/solana?ref=K33k7ZUjpMz9Vv41X4gxYnes8jgCp3YWMuuQSV5XFCKbd7b52f9mcvTyT6qN",
"https://www.pond0x.com/swap/solana?ref=K34XLwvSZ3enaiEvoyYBvSJ96s4aNY1PyaFojMCACX7ovFUA4ymgfPoNbp4m",
"https://www.pond0x.com/swap/solana?ref=K37zk2xytMJfaPWc9J58k1m8hpmkH6spoNU8KcJUrM2TYQectGryhyY9wLw1",
"https://www.pond0x.com/swap/solana?ref=KbggFYxwiawRRKV8kNEJWXGq3zUA8785Fk8QrPULJcrBkVnBhUmhbmLvdRQL",
"https://www.pond0x.com/swap/solana?ref=KbkZ1NCPGqqqFjLe57PH8UunPuvP5wVnmsAkjV2AVaiHz93eHhZQbPZFuVv2",
"https://www.pond0x.com/swap/solana?ref=KbuKzHrfe9oT8BoKwdMxHG9oPitskdfGApJ4tKCphHHfpLiAN546VAo1kbyt",
"https://www.pond0x.com/swap/solana?ref=KbyavbtB5gFhUYvCyiceLRjdRzrGrpbetp9tbUqnJudnxdnCp1YAoMZDbBHt",
"https://www.pond0x.com/swap/solana?ref=Kc3bQqaKPxYiFrFktstFzNSaJC9NvVikP7Amj9GtkjnLobgNLHbjuKHUFDht",
"https://www.pond0x.com/swap/solana?ref=Kc3rp6E1VTvhCG9B1uBA1HaQGQ7EZZcAduBhAKvyyvCU9GqGWKhvfRkE2Dtr",
"https://www.pond0x.com/swap/solana?ref=Kcj1dZJdjaAeg2EMXFCAjuEzcAtNc3zqrAVUuEgBteK1Ywiucx1CWVNLy7Hk",
"https://www.pond0x.com/swap/solana?ref=Kd2DZFqTSFzoqVGUUMivGCXv6GzAxq6p9qu7TtaCLNWztb59x7BXqLSKjK88",
"https://www.pond0x.com/swap/solana?ref=KdADRBDxY68CGeoGeLwtfpXPHoyskLRgvbaashEFVxNmD5LCdCehTBYVNCDe",
"https://www.pond0x.com/swap/solana?ref=KdcR5HYwbdHK8aVvwABFj1jcReBozhaUofo9rxQPE4tHctisUampgW8qPbqV",
"https://www.pond0x.com/swap/solana?ref=KdDy4E66rJobz4v5P69gYxXi2EwhgSKfssddcnwGMKH6e322FiAFRHv6ReTJ",
"https://www.pond0x.com/swap/solana?ref=KdEX2UxG5VWXS3jddWsuQthGt1RvA5hT6Kpv5meezdskgkNEtatWCYGhysa1",
"https://www.pond0x.com/swap/solana?ref=KdfwCKZbqiVPGqb8wnfYVE9SDd5DZh2Hv7yeCzkDFwWnM6pWsGLgkxCnFtco",
"https://www.pond0x.com/swap/solana?ref=KdSy8rJwsNjcJuZ6gyYCdaYAL1x77xSrhsBKboQtPtoAoB2ieW3hnPrHq1qv",
"https://www.pond0x.com/swap/solana?ref=KdTGickDB5FKeaV9xHLAZpjndThVss5hsj6iCqwGC4QTD3sfpc5dW5UUfdZT",
"https://www.pond0x.com/swap/solana?ref=KdtuSaV6UwerJiTAHMpmW4WzBwNS6Sv7Yn3jgiGcXQfxzLNFpCUrrUqbvoPx",
"https://www.pond0x.com/swap/solana?ref=KdTX9v15w2AUuNonUmqgyjFFxBQr4DZAc8KNpneN9KWaZPboBn4DsPUuYbmp",
"https://www.pond0x.com/swap/solana?ref=KdxfGZDT9jGnjmopp7rfZPSFQozyCJ4TLcT7fe9B4qR2jSAYaRsB3dJVnH3s",
"https://www.pond0x.com/swap/solana?ref=KdXG6qbaF7GMuezGgMpjoGERDNu4Q1HFiCU8rq8KTgZGWruhPeixKNqCwz5T",
"https://www.pond0x.com/swap/solana?ref=Kdy4TPfCy7AirJRwT2SW7tvTNjhuYRvhQfAMpeDfr2n1wbJN5egJBivmE2cH",
"https://www.pond0x.com/swap/solana?ref=KeGnbpQ6Yu4UvRGtkV3buVPMmvvz5cRqiKK7Cu763Hfz1CagSWSTgjyfznyc",
"https://www.pond0x.com/swap/solana?ref=KeL5AqrXKMALiS63fRu4wbzu4y3b17shPPN7HowDtn721qsyyeSYHHom4RzP",
"https://www.pond0x.com/swap/solana?ref=KeR6WhATxeUYWsy2FEdDUKC89ru4EjAtih66vwmmxS1MnDf3gGnFgqRNTR5T",
"https://www.pond0x.com/swap/solana?ref=KeRQ1urUNNLpHow2LoKJuqq8Jrw6kKicCYrQey4WixQQ8dTuWKTS4NMB74Te",
"https://www.pond0x.com/swap/solana?ref=KeZf4LYriCfC7iN7wsVUZB3u4hjkVK3B2KHqHvYU9nqYfqYuYwDdNSE1HaQq",
"https://www.pond0x.com/swap/solana?ref=KeZLquRY3xXHoTo2ZkwKyZ6NNBX9U9nGVpPpQCpayQV1ekm1JgW4Uszw8Y5D",
"https://www.pond0x.com/swap/solana?ref=Kf94y3iRojk6XPE6yTfNBktPgsX4WRPTFuna9Xqj5oe1PF4MfJ7wLoKSSV4d",
"https://www.pond0x.com/swap/solana?ref=Kf9LYb1imJgxbYqimRWJAFkfAj1SQ66EvWQ25Rfiz7jhTxnhga6p5dDQkuC1",
"https://www.pond0x.com/swap/solana?ref=KfDo3JQcchYtch6yQ2rhhueodS1Apitdi5Nvscn3AypG6CY7xhTfoipa5hLT",
"https://www.pond0x.com/swap/solana?ref=KffPms4V9sn5B16r3GogUR2TqkWTBRqnLip7YobYjEJQzrj2eaFJLh3NSPrk",
"https://www.pond0x.com/swap/solana?ref=KffvzJMwabqjcpmmvETcCnEtagrVJaZ9jLiBUhG6QduA9BX1DEn3ro8vt9GM",
"https://www.pond0x.com/swap/solana?ref=KfJbkRBDerdLhxZGtoi95c1uSrPSq8mXxjWUjanUAKEGV8QNKXLAvzv4Ps59",
"https://www.pond0x.com/swap/solana?ref=KfMofW1GmDtbJM6d24mYbduVBuPq2xgzgR8uwSrE2JNkqcX4JX1Te89dwdnt",
"https://www.pond0x.com/swap/solana?ref=KfWu92yknkcCSapTbMY1KGV7V2KRq2N7di4hJaHyshiTaD7nZSwFRJqDA6iB",
"https://www.pond0x.com/swap/solana?ref=Kfwz8k6syLiYkosU6GbR6qTfJn1EMica1DgPRRU6dFUYiuN2uqeyJbkuq8Re",
"https://www.pond0x.com/swap/solana?ref=KfxLSRsx49dHKW6h45codvYKWnntiVpMHyaYXBknnVJ5qPJ2XRBD3n6MihaY",
"https://www.pond0x.com/swap/solana?ref=KGgXPGiQgqkkUZEavvDoyfTZH3X6dgzh4LcJPKpCy2mC8jK2b8tghPQvoGpj",
"https://www.pond0x.com/swap/solana?ref=KGm8ZKo2rAnb2UfZkVG2ar1Pm4iiFP8ABcD6qJjbghD499kwEnrqsxtNm5X8",
"https://www.pond0x.com/swap/solana?ref=KGpRzYtHxc5g4jYKwbxB7NpVpb1hSAcZoPfNmm1waP8GBFmKRieaUPVNhVsK",
"https://www.pond0x.com/swap/solana?ref=KgTsoqJtsd4h8U3dM8BiHTKomZ82TBxbEuPmW3fsZCPYs3i1yKpXuqUnwKfG",
"https://www.pond0x.com/swap/solana?ref=KgYSxXWsb3mR1nLUGdu31ntJgNYeLc5RcvYTtnku3BY3aMA4iizFvfmQML7q",
"https://www.pond0x.com/swap/solana?ref=KH8bPYwHofA4W4u7faxWb2piurA4p4H98XgWJwuVVsFYjmRseDR8xd7FFUs1",
"https://www.pond0x.com/swap/solana?ref=KHG449GxGtGTSirpBgWDcQHn9kx2U6ZSEbdcHNRhpA8yszy7sxZGGHzV1cCF",
"https://www.pond0x.com/swap/solana?ref=KHH11n2Ddk6XE9CHFF7nVFkC5MtX7oB9BEq32myCKWivMEpU25jKh54FHMUZ",
"https://www.pond0x.com/swap/solana?ref=KJ9cD7rhcriyvcbopcCbfPTYwN1edtrWkRoz2Pb6h1ChDvC8kZ3wbq9TDFJa",
"https://www.pond0x.com/swap/solana?ref=KJ9dv53mqP53NZKMuaJuvf9pnSEWDX79FVxjnFLVJDYQRazoXw74bmsfqnmA",
"https://www.pond0x.com/swap/solana?ref=KJ9uWJ3HsRoQAfbKjXeEpfsLQaqgFerr4ajEZquyYYY2bc2Kq2RyFXHiy7S8",
"https://www.pond0x.com/swap/solana?ref=KJfrDhEo7Qb9fF5XUp64XTmvEDzLW36bozHiCZRxELgXHhud8huaC8KTVTi4",
"https://www.pond0x.com/swap/solana?ref=KJNRdKEL3yJZHRWPJXK4VNFcwhZpCTYqGD8m4a9DjexkQnw3Lr6cJfoksAud",
"https://www.pond0x.com/swap/solana?ref=KK3eMkTrpjWk2kd2BWLd31popjmNZtyFju2XyByhKHnmjP8EfmdQyrjix1pk",
"https://www.pond0x.com/swap/solana?ref=KKd5FSK8wtagoSvzvkicAJgqrnxQumcyX8vfCgWymVz18TGtFtMm55t6WNxd",
"https://www.pond0x.com/swap/solana?ref=KKLCU8hwJqXGrCzhrv266RjVqM4pVXXfi47V4Db6BNBWffDbUEvfN3NWY13t",
"https://www.pond0x.com/swap/solana?ref=KKZ214HM5vYzb7STdTNoduzmuUjWU9qCGyYzbDQT7UVZD3D3Zd8N5B6bsCs9",
"https://www.pond0x.com/swap/solana?ref=KLDjd1auhVEAdgg14GP4PxZzDsmksj34Dgo5PjydfNxZh39wp7oS4Q5k4UyF",
"https://www.pond0x.com/swap/solana?ref=KLDNXHFEFUXgnZvpjVCAER7Un54i1cZuuKdyMGdSnMh3quJbJckBKXYWC6Pz",
"https://www.pond0x.com/swap/solana?ref=KLisfUvTXtKim1EpzZ3bfxzok6GM4MtfsZ4q7T4LKFjKtzU3oLRyqt597cjR",
"https://www.pond0x.com/swap/solana?ref=KLW4XN7v255F9sj1MU5ymC5mYz3HVpGsVoAXUtRryC2ErpNBSYsawwvAS8wd",
"https://www.pond0x.com/swap/solana?ref=KLxbR9FKgKTQ3XQ982sEX9Pux6PafkjLGC8DvcsYdZYou4df6aeVG8VkEgBz",
"https://www.pond0x.com/swap/solana?ref=KLxH2Cy2QkVzxxc5biCxGBZYT1UZ4dNfXiGsUMcQSU371TtE4xd9WAfBuP9p",
"https://www.pond0x.com/swap/solana?ref=KMF25iKt5SXHKESg3jhYhgg7YoAAWy65RZx2xFzMNJGGrTkWhdrpAASXZULS",
"https://www.pond0x.com/swap/solana?ref=KMFEevDJkYRnBGsV5wyeMsd1GhiPCLP7ojUi329a2R1ANSvnUT4S7NVVgCA5",
"https://www.pond0x.com/swap/solana?ref=KMK2SKCkVVX3vs93HGPVRUEETKRRvds988YpG2QKGTzhddaqWYbeeS9fCmmr",
"https://www.pond0x.com/swap/solana?ref=KMYfzjUzpY9TmPNtiYzzXz3r4r2k2ZtV2x5usLKzWzTWdSRrLTkSprZMpo3k",
"https://www.pond0x.com/swap/solana?ref=KMzeBupnK7bREaEhYkGB51raqCFJ6pQsnW6p5UqggvvW8Tqri9vAi3ixnTCd",
"https://www.pond0x.com/swap/solana?ref=Na4gXub4zuvMqr83fBKSbjVLsDnmu7J9QHrPWKDCGqAbTA7pnwp9pV1oK2mc",
"https://www.pond0x.com/swap/solana?ref=Na4qPy1J1TYqcLuzq1AMU2ScSyuB4Nezm4kS1242vj67k5MipiHAiF1bEeY7",
"https://www.pond0x.com/swap/solana?ref=NaCi6G2aNLY9igsEiayzAVkTkfvnvWg9XyMAXS7wKYz2ZXV6WF42WX9yUavQ",
"https://www.pond0x.com/swap/solana?ref=NaDG8TbaqYF1bD4wMpjo7iCwb5nDBf1Qa2h7rBSP1Eox2ou5ZdJE7TChANhn",
"https://www.pond0x.com/swap/solana?ref=NaoaBuf8ZnnbptUje3j4cxEUq95u7b6RiTBXzv4rg981CMqMVQgQ4saesPxT",
"https://www.pond0x.com/swap/solana?ref=NawAf9WcfKt76aPJoft9Kivu5UweSMr2wXRFR2G5h7NXmp24Gq5jcm7bDAfq",
"https://www.pond0x.com/swap/solana?ref=NawQFMXssSNr4QwGfePhfDkq62ZkTjwNGS357N6qryNbCtWQVQALs7FQvvzC",
"https://www.pond0x.com/swap/solana?ref=Nb1wgHfZ7qstbb9MqbrMcuKxXJphEzkPQ1BVURHsgJppCNtGvXeYeXkxjdsd",
"https://www.pond0x.com/swap/solana?ref=Nb6GLJzSS6U3MEP85VAcrLj6baWvmhGZuxnrd1T36zPfBUKcWP4SyY7LFti1",
"https://www.pond0x.com/swap/solana?ref=NbEE295ounsWue2uRcrcnFP2ieF7Bead2uVJTaGS6Qf26VrrZEcpFMRGwVEd",
"https://www.pond0x.com/swap/solana?ref=NbEhyuctKSHSV9u1dpbnnCdNeqDDDB993f8cRxnewE8dNsEvCMkcsGELG3Cu",
"https://www.pond0x.com/swap/solana?ref=NbFNpGYjoePzxPMBcRZu9Gqgj9QcXKcZXDj7JsijDD6JTXwFoq2Arox44hHa",
"https://www.pond0x.com/swap/solana?ref=NbmJY16HXw4oyEAGYgpPcPUcnimt18468eEtMmDekAdTHCj9e3XjNgPhpwqQ",
"https://www.pond0x.com/swap/solana?ref=NbTqmHiC2KRH2Xn2LRKCpHyBKNsKusLWVWiMJLHW8yviXwDFU2Qnu7UMVTjk",
"https://www.pond0x.com/swap/solana?ref=NbXLM4bXSoDLQ88L9KdW9pzBiLvn57urEk2TdbqCzKPHR4bt6o1AThDay9yt",
"https://www.pond0x.com/swap/solana?ref=Nc3prq7gTLx1pZQCisiPhWvzmrTVyFAsf6dGNB5DQb3cG7wTQVUn7H86tMbN",
"https://www.pond0x.com/swap/solana?ref=Nc4NYu8kbvrQsgG3fooWGcJpZy4zpRsfQ3FvvhwiCQF325wR9cGceVgm3MfX",
"https://www.pond0x.com/swap/solana?ref=Nc7TihM9BMhhKdYfxqKVPuiXcPtzgBq6ozNYF6hh14h79mRymdbea33pWCue",
"https://www.pond0x.com/swap/solana?ref=NCdfX6G3trGn2gmHr3eZtT3Ef7G7ufzZtSe2VabVjyVkssZZvov315soRNC2",
"https://www.pond0x.com/swap/solana?ref=NcdV6jNmgLowfNMbngACKzyq7Dv8kgXMBoABYYrozZkkiqi4SxiEFTqfi5t1",
"https://www.pond0x.com/swap/solana?ref=NcLYo2C15Y49cizXSguensN2jMwseVKiWe3qjbCmSWgRcLFkYqsb5gCM8GAn",
"https://www.pond0x.com/swap/solana?ref=NCmdTmb65FuWdACHnrKmSUr1TNBu1vt4GGYETj1HJrZ76pPiunTZ4ypvHAdN",
"https://www.pond0x.com/swap/solana?ref=NCva5kroEAg6auAqkjPqzqs7bSoY6DjxaBQXf4SDa1ccvvhHA9VPpUGf3D7U",
"https://www.pond0x.com/swap/solana?ref=NDaMj3mUJsobeQ7A9giG3iRuvq5L4W5DxbvR2RfwKtrk6FHmqhiu1Xm8K4bG",
"https://www.pond0x.com/swap/solana?ref=NDbADDkjPN5YJjg2qWerpnH46uktNor7uGbSXu457G1QoeLX5YAUd4qzMeHB",
"https://www.pond0x.com/swap/solana?ref=NDijfHACavP5JXyVVw6MSWQX2c1nMWP5tqPrqLK2oTZAGjWgcCxjR6VmknWh",
"https://www.pond0x.com/swap/solana?ref=NDjGmiLxBv31htANZwxF3vyV9oev9p74ZDxSLMnmy7Kd5SQYys1wXUntddfK",
"https://www.pond0x.com/swap/solana?ref=NDnvhCkhruN6coQfvVzZMY3jdXRHVEdEBb71tLfHGLJx4tMBHDfj2EQyx822",
"https://www.pond0x.com/swap/solana?ref=NDojvpYMoahACM5ZsJuorqrxzYKknz9qzb9YE15FGvQC9TUYbZ478qtUMaxp",
"https://www.pond0x.com/swap/solana?ref=NDsjQyXw3bvAsdxztfy6h4pVAh2LqhNBE6Pb3YdHm9jqhwVJTTzFzj1t6L8X",
"https://www.pond0x.com/swap/solana?ref=NDxevgFHPVCdDw6e6bMNwdBTwqfQ5m1LCHy3KMydvghnngc4F5mdnGJnP1ZM",
"https://www.pond0x.com/swap/solana?ref=NEFjE1xEJhtRGRvLy1PJ1rEjdfTXXd5n2hpwQfkCMmEmJhTUbumMoKWKCThN",
"https://www.pond0x.com/swap/solana?ref=NEh1o3AS5VqFF8DqBh8tjoCNPSJRGd1cdvLPt9S3J3iBjcX8pffM81Dihh5N",
"https://www.pond0x.com/swap/solana?ref=NEJu4idsR1p9JBYaZgXNJVAsZ6z7h59Gd5nmXrC2Y7x43EpEm6Bdd7anpiiY",
"https://www.pond0x.com/swap/solana?ref=NEkTE8zW44S9yABKxKhZsJorKJsLcsdiQiwUuefXXRrUwqry2mgDbCU9BvFX",
"https://www.pond0x.com/swap/solana?ref=NEL1yPwg5QQFSs1vYJ5mR8UEx1BSmP5HwRtyMPgmRPvwucmkE9iQ1DoJ6B2U",
"https://www.pond0x.com/swap/solana?ref=NEq3TKEynbM2zD6taWVbES1ksRYyJqFjgGBbUAiXdPrnpdM72vkXc9oESMy2",
"https://www.pond0x.com/swap/solana?ref=NEuStsw1g8DnjDpQVEaPpWksuxTHyTxy2pW9NAB8d2LLwMx5mHrGEaTf8njN",
"https://www.pond0x.com/swap/solana?ref=NF8pBZU28esMD4ttsZdwShGVrmBvXNEanVqt9MRjswmBgiowtAYV5JftaVPd",
"https://www.pond0x.com/swap/solana?ref=NFHSoNc7YEu6Z3uy7QnYEATvhuZ5mxNC1ttETThnJf2S4AVQd7umVjXi1JAK",
"https://www.pond0x.com/swap/solana?ref=NFMqPkaSsZx4r4P1jF5FCGm5SWMtk6W4YGEKvtcNXyfNq7pGTdXiGxJi2xAE",
"https://www.pond0x.com/swap/solana?ref=NFS5ERTie2UKUbVsfWoRsXmPsnSseBJSVDgDcttjzZyMDvs3xPj1X8K4zBpu",
"https://www.pond0x.com/swap/solana?ref=NG1X1EzuJUQ1C8EBu19x9ZFKwE8cPKV4g3hfaEVopXFab8hXx7SEGFsVHjqX",
"https://www.pond0x.com/swap/solana?ref=NG6SeN1KzTzwbZ9vJF4wgyY3M6y7KYCvFCXSuLc2NWcQgPxCui6MrSwFfC7s",
"https://www.pond0x.com/swap/solana?ref=NGJE3RCtSH9BELHjYZUBFKbiNMgcupKCvFmtt1uGHnWvEa9j2Dcu7qApewZT",
"https://www.pond0x.com/swap/solana?ref=NGpxzM5QUSRYHEdhp9xXUBzgbC46FgerpPB5B3qUGKyf75jZKvG7jSPTSMqX",
"https://www.pond0x.com/swap/solana?ref=NGpYv3SykixKNfbv1Gcw3ejoR1yB3bu7ATgr7JuZ9hgA5hFhZjo6XVWk71xc",
"https://www.pond0x.com/swap/solana?ref=NGtzEK821MJxkZH9RGHvVSwNXho5ga1mTuadGRDLkgdwHYzRHsu5HaVpwCpQ",
"https://www.pond0x.com/swap/solana?ref=NGyVZFv8g7GsMXyG15eZ18qtHWT2RUVPXfA3sx2zzhTHBUMwx4LuZYTYTX6G",
"https://www.pond0x.com/swap/solana?ref=NHBkxxPkSpBEYPEvTLC5aHfgcgkn899AwpSHtranurtj5b5FziZii6byuWN4",
"https://www.pond0x.com/swap/solana?ref=NHdNuKAD4BQ34yQCVFrB3g6xTTFW6fXjpyXecc4ax7HYAemECBpqQx5Srq85",
"https://www.pond0x.com/swap/solana?ref=NHe6XupMVKkXZrWi23edqwPRV27dqDt7CxGPnDSjHXn29oeFhLZNWL5bcxdw",
"https://www.pond0x.com/swap/solana?ref=NHeFNruHYU9EteNkcGqiHNYCTWcRNrijTMQRPi1AYm86zwuKF6NZfjUXXSg8",
"https://www.pond0x.com/swap/solana?ref=NHFhRtk43dqN3pA8uP2d9GmSj7nTXH1qtDEzANAMvrRPquXQ7Dh2KU1Jtni1",
"https://www.pond0x.com/swap/solana?ref=NHLnq4FyuvBSP5KJHrhAfKjrK4CJNDCKFKV9hYfjSNjBgyaf2Z1LkmmAMj97",
"https://www.pond0x.com/swap/solana?ref=NHmc9ycKaJ4KMG3wqoKdVsBxzGzrZoouSSKAM9jcQs1ypvY6MPXdNst9vrDK",
"https://www.pond0x.com/swap/solana?ref=NHRL9pZ2k2k19SAZu7qCaZFRUSbYHghYvQdG43YhZNGvMRAwZ9LithgpruCi",
"https://www.pond0x.com/swap/solana?ref=NHZvdx77rsHoNZVRZo52BKKG5MrkRFPCdwyTMAtXcENTcRZ7dDTDakR22NXp",
"https://www.pond0x.com/swap/solana?ref=Nr876JWWW19eurVR7FjrL58wJHianWZqhTmGQ2vGdNXLwRSkcy9pHG5zANzU",
"https://www.pond0x.com/swap/solana?ref=NreGDhPnLSTSMxby7pEk7rCrHKS9NYcbxo5fi8jgmFbGEesbDXiwtfRAkffh",
"https://www.pond0x.com/swap/solana?ref=NrG3y9qTbjjNZFySi3xUjAQ8oVnM8FTqLiFwXc81Z32mSGcPvnWL8pLBEuwM",
"https://www.pond0x.com/swap/solana?ref=Nri2C7eZkTszHUpJgVqyzoa4RSsTMCxpRAm3W5Kx74ucJqX8JdT8tkV2njGe",
"https://www.pond0x.com/swap/solana?ref=NrQL6z3sW7jcvyHaHibvuHvDevdKVyzKBek3YnWmt2ekhSUGPZtqeY7FBz9u",
"https://www.pond0x.com/swap/solana?ref=Nsg7WDKny9uzpWTzmfGRsUShNdWW8erKmL9NTDXYatwNKSmW8kszK4HTYdzU",
"https://www.pond0x.com/swap/solana?ref=NsHbfrYcn2QaoGFQu2vgqCYLfZ1XXCX3iaqqMwwQMDBFN4oTCmwKwfQFxk5n",
"https://www.pond0x.com/swap/solana?ref=NsSfC3utq2DDrVsLixDMa7BBGCjDsHbnvVq5iEqE38thW8Bwi1apJpaNrrS6",
"https://www.pond0x.com/swap/solana?ref=NsTE8g4dJ7yZSiuFt2biJVg9sZFqudSr4ct1SxvPSUvqVpunbYwAK5u1fzqU",
"https://www.pond0x.com/swap/solana?ref=NsxKRxZoPZoLNWnsPA7be8zdrSXsT6XKq8buDUsRsFp5ZYhb9v7it3nBhLp8",
"https://www.pond0x.com/swap/solana?ref=Nt7ebNqkPTxbFCQknB7xyXfvLq6oveERpAhRxhqsT9qP7BsQ74T4sPgz7FY5",
"https://www.pond0x.com/swap/solana?ref=Nt7nDL4BzKE9qa7GwhdkWoApvYCgz7kjM1GgiNYoL8Saa1Z7pYudwP4fimvD",
"https://www.pond0x.com/swap/solana?ref=Nt7ZcmTvFVvV7bGCNRPFUYwXRUG4BcBkvfQHfjiVGsfpxiPW9zpTa935RH78",
"https://www.pond0x.com/swap/solana?ref=NtFbF8CkVNwYQPtVGUtqyerrmgng6CNmPK3kBE2AyU2psoQB4Qxdure4TZEv",
"https://www.pond0x.com/swap/solana?ref=NtGD3WqMPBF8RRcMVbs3Z9rCHTzPEzxc94yvdfwQ6uq61ukxhQxJW95JvpQC",
"https://www.pond0x.com/swap/solana?ref=NtugMpmv3t9zquBUSt3jHBrpdznymnEbMucvpk9QdZjATyFJg9uuzYUHW8W3",
"https://www.pond0x.com/swap/solana?ref=NtUZNm97LX1iDWchGRBRgrFjnnxJ6m2LLzrmn6ZzFKfwsUMeWVFkzMcJN5Jd",
"https://www.pond0x.com/swap/solana?ref=NtvVbvV39iAfPY9rftCZd9QKd2XHfDQJbaWP1yjwCGW6YPxbPmmJcVyP9aCc",
"https://www.pond0x.com/swap/solana?ref=NtYoPJvLvtBPsDmrfrVP6qe9qMpWAzeNLef6XB3hXqF3FnxEA958z9GhbBUv",
"https://www.pond0x.com/swap/solana?ref=Nu112oxtmswdRy9hhaGYzYCVjmsGFq4Qi8A4B7x9BnuCazmwDQnnKyUYnWUp",
"https://www.pond0x.com/swap/solana?ref=Nu5EtZ42UKkDgMCtZ858LLR9usLSyGs8GDHnznsgCrVsTrWNt4pCLjAzMAg7",
"https://www.pond0x.com/swap/solana?ref=Nu9JEqt2pBh6SjonAo5ghQFoZok94xgxwQAhh9RbG2yn6C7E8HLthPdrsB67",
"https://www.pond0x.com/swap/solana?ref=NueKPWrVJ45JsskzzEbgCDLLuiYshfDScTyXg7fpDYvdYeZxvg8ssJrD9gr5",
"https://www.pond0x.com/swap/solana?ref=NuntAjwJtxxege1iCKppXtAdPx4X9eWBLTJijbffpePiJz9QpwJEWgAeLUsc",
"https://www.pond0x.com/swap/solana?ref=NuxbH7RhfnGxEfjCxA1th8zH7nVNT7UK3DYbAQyC3ASSXahCAVF9FACVf7M2",
"https://www.pond0x.com/swap/solana?ref=Nv6sRKY2Aq18CeQY2iPZyRtYSrXASnAq8eWUra9bRUB4mqXdsVceKmNtvS6e",
"https://www.pond0x.com/swap/solana?ref=Nvgbw4go7cRAiPhSvHULC7DwwhcTf5N12udL6yFwiUoERh1Ny1SFoW5wKD8W",
"https://www.pond0x.com/swap/solana?ref=NvKfuxogKXhh7323XdhFWNCitRWMJMHP3KoDZUNBwx9sf8cLteLbN28Zwnec",
"https://www.pond0x.com/swap/solana?ref=NvKpf2Ukq3ocMGXZA4kGFDQovjPuxX3aFuVdJhfvCQJuTfiPR5x5ZX7GQh5R",
"https://www.pond0x.com/swap/solana?ref=NvP7FLksxidzYEpBoP6Vqv3nn8nMuoyBqo1Zyj3gu13zEAnYstKJHyFM16b1",
"https://www.pond0x.com/swap/solana?ref=NvPfCybrsDPwZ7mFYLqK5RKXDpM7EZwEtzkKYxPQK2vMmKuRQ4k7xbp5na1T",
"https://www.pond0x.com/swap/solana?ref=NvPvtuQd3JrNksaU2vrGgZdf2Zc4DokxG4ZL24x5RFHzpxCBSnrvbDafGUKW",
"https://www.pond0x.com/swap/solana?ref=NvqWrJd79SLj4TkSG25KHhGz8KinwuyqM41XdSCLSzjMLrWHasU4CR3wkrCE",
"https://www.pond0x.com/swap/solana?ref=NvyF19Lbpg1hSDfYMWfKwo2jumaqLp7eBm4CNLK9nTBSMfPVXJ3DsmTQBXDX",
"https://www.pond0x.com/swap/solana?ref=Nw4K5nryFXQDH9HvXVqFLzn1ag3J2w1g4VNTRwkGLbD5mwpN2GQByjqbuE45",
"https://www.pond0x.com/swap/solana?ref=NwWKFUF8qYZ1iSfRgVFvzJJFavrw8vyAf9ei4QC6yrbiz8DWbhrFh9iskASG",
"https://www.pond0x.com/swap/solana?ref=NXcqjtZNuDR2zpv46UEzTTo56e759yJ5EX7dHRNCq2L8M2vK98aa1zjdshn1",
"https://www.pond0x.com/swap/solana?ref=NXKoS8zx3LruEbyufk47WYvFNm82tfRUPqH6fsj3A1haohC9s5KibfkJYiF2",
"https://www.pond0x.com/swap/solana?ref=NXKpH1mXy1kE5pACtXLiBUM1UD5YnKrNJsVLtdGb7MmC1hoAN2SkVPkM9xex",
"https://www.pond0x.com/swap/solana?ref=NXLgfMttaB4sPnznGvnWcLDeNxANMGGTMiqFnCTwEorvDrBKLT3S5NXQtMJd",
"https://www.pond0x.com/swap/solana?ref=NXLy9XSsnfjuGrc84sqQ5Xq1ciFCbgAFnfo7wN9P87f32wgtY4P2APi9iqz6",
"https://www.pond0x.com/swap/solana?ref=NXrhuTuLgevP6MiMErqvC6q2M1kgQoWub51aFjfJDDjGSTTcmGWwedDUJ5GQ",
"https://www.pond0x.com/swap/solana?ref=NXVDNbMmvFipBmCZRZh7xy27McL2hNsApJoHQmWzqKai5nQUKXRxQ8dXmxrW",
"https://www.pond0x.com/swap/solana?ref=NXVRmVwSdukyNF4qb5fqNPoG7rh2ZCauxe4yrBMXupvcTTX8SNB6kJZpPTG9",
"https://www.pond0x.com/swap/solana?ref=NXVUs638JtP8wCiQTo6sEv16nXBZJEwKkStuqaWaaxPtBiPNwoZcjdXeagRJ",
"https://www.pond0x.com/swap/solana?ref=NXYafwtGbLSWBqxmrUbJipmyQSCZ1YqqtjqZ4WG5HgPEvkzTKNL6L4nuoZzD",
"https://www.pond0x.com/swap/solana?ref=NXZ6nK9trKzTTpWLfgjjPMm3f1YadetoYRaMmvuhD8hdXvHH46S7fuFiSuas",
"https://www.pond0x.com/swap/solana?ref=NYaSyDPD9vBUWvyqwW7yFwp8fU2nLYf595zzkVEFXWtPqrWHVJD5cP7DWjKp",
"https://www.pond0x.com/swap/solana?ref=NYbQ6LNH8ET7iECeAnLPr4XVfuxkRp5fpHhgxmd1a2PKwau29Hk5tk1vSSnV",
"https://www.pond0x.com/swap/solana?ref=NYfGaLAxS6tt9D4mdeaRwyCNqVx9RcgthWK6brHLfXu3gaTK43rezEkX4xCS",
"https://www.pond0x.com/swap/solana?ref=NZ7JpcAQAds6nB9WAM4ymhT1iKYT3YCFDLDBuJuNKgbe24i6uGSmiNGqQ97z",
"https://www.pond0x.com/swap/solana?ref=NZAcJw7nVmwe8vWY5NuSwzdUfbCkf6o7QLo3Woaf4Bb2PAsQJDXhqMc82Ezn",
"https://www.pond0x.com/swap/solana?ref=NZco5WEpi1cW6SJoJVpPRvRzHP3u8bT5Lfnck8nVfo1EABJJfM1NC27JxGqo",
"https://www.pond0x.com/swap/solana?ref=NZcTnAyoNKFkPQkzX4v1CqQNieUoqzM6MbWvXzittw6Uw9PxCQDE2PtYghD9",
"https://www.pond0x.com/swap/solana?ref=NZFRMb3xZeAB1Me2CEGvBGzcBKxx1hgAbfWZFFb5137Ut2jCwmzgJmictn8z",
"https://www.pond0x.com/swap/solana?ref=NZLB2CTbfhLcD6jdU6c7YyxWWAvM7RnaixYLsMLJG1xMh3pMKTFwND88Vcbh",
"https://www.pond0x.com/swap/solana?ref=NZmg8THDdJKvxT7u3fJRZahaD8W2y6uC4YX69KQTB4ULmAjmeGPPUPzk34n6",
"https://www.pond0x.com/swap/solana?ref=NZqq6sz3YpUKPz3D3FR5g34T3D3uTBB5gYiECAXUxByFERCdH9gG7JNUiGbJ",
"https://www.pond0x.com/swap/solana?ref=NZqVpQrUveUJDnSpMV6FiayC5SaL4QyyDykadaG8brzJAq6ri8DcQxU4YXkt",
"https://www.pond0x.com/swap/solana?ref=NZzaKNuzLCFJd4gXDwxWBnPvZEvcjoKBJiR4g8JEPg8Xy49pzhEe6Hw6LYxQ",
"https://www.pond0x.com/swap/solana?ref=PacUWnytwzNgSJv4aCsiQfERgfziZbWzduFEUwFrFg4528DxzJY9ntfGL44x",
"https://www.pond0x.com/swap/solana?ref=PaG4o2sNQ5HQ92VR22wRQoayU5NhcN6earHzaDoPVj5GdYV2snxvfR9HiTdy",
"https://www.pond0x.com/swap/solana?ref=PaGEReC5kdCy8v3em3ZV9dJ6YVCJ2ReYyXyGKsBMK7EFmHRyaci5nLebVR5b",
"https://www.pond0x.com/swap/solana?ref=PaLHa7XfUutfyCPy88htY6mLjJ1SsC9JHe6SibjwNuHuGEUpqLZRcAjWvdKM",
"https://www.pond0x.com/swap/solana?ref=PaQorz2AkM33wrT2AK4GSMgYzTK1JpSS8mx3baoJVGsrp5wsfsNf8i6eXhCz",
"https://www.pond0x.com/swap/solana?ref=PaufYJzVBfBPQDA1RRUAU46g8PXn29HJLJratXyQXQFsVcGBtTEx4cNoY5Wz",
"https://www.pond0x.com/swap/solana?ref=Pauu4x1rKkBPn9W6bS7dK46XVHtysZFn4h7mqSx9nNH16PW2isYi4dkhbTii",
"https://www.pond0x.com/swap/solana?ref=PavjdMvycKUpSo7L48kRiZiGiXFmByoBnUXKqYdRedQ4VacYtcz5xiX6Sk8T",
"https://www.pond0x.com/swap/solana?ref=PAywGYV62CwpuJmqfYCfGcvbnWYNTZFoQ1MSqqspkVMhsF1tdTN1xecGgAs5",
"https://www.pond0x.com/swap/solana?ref=PAz7v9ygBXau1eGNj5ZH3Lg24BGWcMFxXeNfbBzPjLhh1fc7FFSUDabdwTaS",
"https://www.pond0x.com/swap/solana?ref=PB7vp3SzVvP8gTyeQCQMw34xyrymiXhgVax6ZWv63xWzMVKgngiDY7TAVgjd",
"https://www.pond0x.com/swap/solana?ref=PB8YZMuGw5v2VDMST5xZZCnKDoqq8SWJG67J9fctMLsMrNwVBmA8J9dBP6b2",
"https://www.pond0x.com/swap/solana?ref=PBaHPyDJX1ntMmoJXzvaQUqGtBuxrs8hThzdXTsGxW1w6VsdSsA7JaHGGM88",
"https://www.pond0x.com/swap/solana?ref=PbCnnx3nNEKCg7PYxK8en4NDhVVJvRE9HTm36gyNPLea39gmTNTrFwZmmErd",
"https://www.pond0x.com/swap/solana?ref=PbDYKBpGDdRSgpFX4oa1VTebJr1ZMzzU6eusqwXuXJWahkjRHKFo5LjHPa61",
"https://www.pond0x.com/swap/solana?ref=PbDYRz8br1r2kRQwTmR9fE86iPDgg11jQoeViKETTL1TojyCmTi4op2DMvC4",
"https://www.pond0x.com/swap/solana?ref=PBG6L2nFG7YNQav1tAuLxg4ET6Ph1hNcSqxoSoyefHXF1meVi8zGSuk7ubGj",
"https://www.pond0x.com/swap/solana?ref=PBHGpNfLd6gv5eMiH5gYHjgehpTMPrkCGt61PWP75CfJ3eKsCE8F7WLJjbxy",
"https://www.pond0x.com/swap/solana?ref=PBRHTSvoP2vejrRACcFT684awnfUXyyYPf6vkmVKztWk9bzG21u9uEDM3bvR",
"https://www.pond0x.com/swap/solana?ref=PBW1Pq736C4ebv81KzW911YA685SdZtVhCyj6tWSQDa4zAb7vkGhay9sskkj",
"https://www.pond0x.com/swap/solana?ref=PBW8FeKaLJuWGBBnyx7HG9sg3WhLT7Edx91F1MTq8FZrcpaYJ5gE6Fpi9tz1",
"https://www.pond0x.com/swap/solana?ref=PBZUk6KcPJr2UVQpfimXo1VkbnTHZenEr1usFSrSg9wki7EVu2LhjKLL84QE",
"https://www.pond0x.com/swap/solana?ref=PCb6dMwWnizuCdCM8yD4Hmt7k2mvZyEjajiWVWUZtYfkk64G29BMqn4Zd3Zo",
"https://www.pond0x.com/swap/solana?ref=PCbfQ7YVxH1qtFaiyTNdDrg1NtKhERdZDpDAfFjHq25c7jE3tEmF4UFpfa4r",
"https://www.pond0x.com/swap/solana?ref=PCEAbP4pxkv5o1iGuZzGWmMcWy1ipXXRrGpuNMQG9qh1swR98jVqbUxsSToV",
"https://www.pond0x.com/swap/solana?ref=PCNp1Fk5JbHf2WLHvCLWkU2ybWS6NDeLFAzvdpeP4A6CGSuSeSSTbE1VN6ih",
"https://www.pond0x.com/swap/solana?ref=PCpRqSmxxjTnwSgrCyeHumQCJ8psXW3AWJSfCVUxv9ndtiw9Xap8VXrDVwf7",
"https://www.pond0x.com/swap/solana?ref=PCSz3Z2RCMSB6pmYPRhjcGgqSD5JV9GaGiwQKFDJKUfpnXSpLN42wQ27W5GA",
"https://www.pond0x.com/swap/solana?ref=PCtYBTDftoDUzLD7MwS6cm1NqkMgEzUjmxGXHNSL4wVMnCgpF6rCkso5MQr5",
"https://www.pond0x.com/swap/solana?ref=PCuAwnevo7xctGu27ysykDHurAVS2yjexZibsW7VCPEyUwGd8pfjhEw9mbmx",
"https://www.pond0x.com/swap/solana?ref=PCXFyUy88B9F6nFE7PKmUvKrD5eSKm7sHDPDTS8dyFbZAkvfzpnBiAYxmZ6Z",
"https://www.pond0x.com/swap/solana?ref=PCy1Vyb83c99fqJNunpAEiN6Yh6TQJMWDVg3uriKmvp53e8jstxnGuLQSUyp",
"https://www.pond0x.com/swap/solana?ref=PD2u3ces8b7zQB7wWPEfn5KMrc7oC37zCpePWtB9gTpJ9eoPAzHA6s6aqGjR",
"https://www.pond0x.com/swap/solana?ref=PD3ee4mXyT9J6LS6TqXMY5KCBaREcmhHkUc26H2V3s8s8a8wbJLEsnwRUoh9",
"https://www.pond0x.com/swap/solana?ref=PDGbjqhUdYBp1pTSE7Q4XounajhdFKxf4SRgKM8gKdsN3ihAxawYE2972jFP",
"https://www.pond0x.com/swap/solana?ref=PDGZgYRq13wwwgsqVJ8yBXvd8x2iAMN649CzH2Z21Q8VgcFR2v5x5qeu2DPW",
"https://www.pond0x.com/swap/solana?ref=PDhzvTjJM5baci7MDqJ9Fa6xiSwdkESc6FMuYxy7MvJjNEpvXp8jyRwDD9pW",
"https://www.pond0x.com/swap/solana?ref=PDnB16iPfx9fUcvUqaJE6bswQMM6Va6tajtd5EoHcoxkhn15HaqPoRzYGDyk",
"https://www.pond0x.com/swap/solana?ref=PDR6Pxc1CxtEfu7XoawMAZeJRZXQMes1SRiz3JH546zy9RX2XEGJGuzXqFba",
"https://www.pond0x.com/swap/solana?ref=PDRAL6H7uo5BJ1Sgxco1BmfDj1DsQqkKXW8RdkJ8RHKR28JTeYygw7qehhGq",
"https://www.pond0x.com/swap/solana?ref=PDrp4nFxyf7GkV6oE4Ry7YjPBD2Xnf9Nnp1EsJCQYsNgwrSYyqLs2kRw3dYs",
"https://www.pond0x.com/swap/solana?ref=PDZaLUeBP3vMvBR9BEnUbSb6SgkncTzRSQ9zUDc8Uqetq8aJ6ouRCZ44CRsw",
"https://www.pond0x.com/swap/solana?ref=PEsn7SmLg4sTPX6eHa9o1W5GtGrkoQWRKt9T4Yq1NLzdNBiqe1wdcUiyU5vn",
"https://www.pond0x.com/swap/solana?ref=PExuDjKNtELRwr4pcLzvLgLUfUL5kxWiTo3b3rPXoj32FeUpBy2jkTJ13JzM",
"https://www.pond0x.com/swap/solana?ref=PF6Fy6yRhYfG3ZpTpXDJREoKPtnyHMz27uDjVmuwjdhPuPhp6sWbFbfJVDvH",
"https://www.pond0x.com/swap/solana?ref=PFAffif4S4ziJjNriXrkfvUXpyThZxoHwUp9K51wFiyj5qpKK1vVSQADw8Zd",
"https://www.pond0x.com/swap/solana?ref=PFdLcQ9x5xyw2CvrhiogVLtTVNBU1BbdUpgvqeypw1Bt7siRoXpxA4uAZBsi",
"https://www.pond0x.com/swap/solana?ref=PFFdGiGwiTsPjQp81FYMwJcRy1EasQW1myywfvGkGeYzVZZDgXQjBMRCE51b",
"https://www.pond0x.com/swap/solana?ref=PFFzLE7nMSfhDAYockCgBbAT4jHH8axXMbU3ePZN5xFabmozfQC4ZrGyXp1F",
"https://www.pond0x.com/swap/solana?ref=PFh4QsLrzP5ss9cssi3pG3BEi9rKnJMSV5H2Kn11np1RUrSfRRHwjkDTsD9W",
"https://www.pond0x.com/swap/solana?ref=PFknKhxdgNHuVqD2umPKbj9zzTXv9Pk7PZzGVxhiEZvNvTjSC2Ch3KZLtqTg",
"https://www.pond0x.com/swap/solana?ref=PFUABmU8YUX5ZB7X5412pWkr7QUtMZoMT8DwPuPnEnbLueBi2FD9VhzBqic9",
"https://www.pond0x.com/swap/solana?ref=PFuGozrWNM5Mx6x4xJSQBiMMTsr6JtFd2L5GkRLPn57wACnFEg3ZQyiU2Xvw",
"https://www.pond0x.com/swap/solana?ref=PFUmwNZnNtdYLB5FRrJs2k5SS84uDvXCYZ5Hjvcao2qqWMLfFezK2oKAToDe",
"https://www.pond0x.com/swap/solana?ref=PGHULgXi44aJ3RgVLwzBW9RvwqMHJwMHaNQiUiCrzU3uprQRm2qiSrQxRRMz",
"https://www.pond0x.com/swap/solana?ref=PphTcjzcVcoPBaGxZBKsxgohWnArC7ZMCKaL84hqVhjTNfAqcKy3MSf16F7y",
"https://www.pond0x.com/swap/solana?ref=PpqxBq58ZimeRPQhPZFUXhKqPcx44C2PQU5Tw1ncadZDxWCRiyEsxSEjgcSP",
"https://www.pond0x.com/swap/solana?ref=PpuyiGRRhLDdCSjULuSpB2YtfgBmcU6YyVffogu4Mzhbj1issD46zQe4vBhh",
"https://www.pond0x.com/swap/solana?ref=PpzDcCWSA9NpguqvWvZxS92uP7ZmRBS2g6qqoPSMPXZNUez5FY7Luc4HisPw",
"https://www.pond0x.com/swap/solana?ref=Pq4WAo5sGTxRxLXx2uG4iAdskeT2Re2Rzn5kmpj2vkQqyw5FRptb2VyEBvJx",
"https://www.pond0x.com/swap/solana?ref=Pq4zSbEBqPymK25oipj4mdAJGNRdYwLPWss973N2vCHC8NMzCGQDwfd9woDP",
"https://www.pond0x.com/swap/solana?ref=PqDHQcQpEJ3LHLFdPrDU7mTSDDKrgsrSsFtjwJSf43vLRHw1EwhUYURDPZ3M",
"https://www.pond0x.com/swap/solana?ref=PqsFiZSuXhqcoineJ9cdrm7XWa4yeojmKE8LLHMM9xvZWC32bohKC4qdh6gR",
"https://www.pond0x.com/swap/solana?ref=PqsNSw62oJqXvfiVJh8zjfHqRVqgaCurtoeabejFAFxo6iVzdW3SXf4gkNXb",
"https://www.pond0x.com/swap/solana?ref=Pr1hSKCK3zcuW67hKDVBtkZyZrCNyx2irwMj1i9vH1t5kX6fhUkkWikS5qST",
"https://www.pond0x.com/swap/solana?ref=PrAHtgSZghqdTeFCzTsz89AQnECrtUzydcuZZ7rYjV8wQCNVzjbzofLB25oJ",
"https://www.pond0x.com/swap/solana?ref=Prcp9qskY8kuqrG4g6u1vs6ovHxnm3m2ST6kPixsc3Zpt1wEagnjUCSnLTEC",
"https://www.pond0x.com/swap/solana?ref=PrKMT548Ws22WjUEtZSFyfJxGDfh7jkmgNWxTey9SNBYAsbcdY8bftax3FAo",
"https://www.pond0x.com/swap/solana?ref=Prq6YZQ6dcZtv4QQMcpmy8qxJz1UsL8KUpYUQxwbH8RvNQ3jNMkM6M5oNTwv",
"https://www.pond0x.com/swap/solana?ref=Ps3oBwUFJqg78Qduw2jVP4voyZLv9KwBqbhYWeoMt3EyZBkFSHt5NEFicSYu",
"https://www.pond0x.com/swap/solana?ref=Ps8Uzpz9xEndKWn3fd8veVqbtczE1a4NjhRZM7tPssAcSJWYgiygho3EyADf",
"https://www.pond0x.com/swap/solana?ref=Psa9pi6zT2Q6T6tiDXBopbFSTPZ9PqPK98obev8v1sLC68qn4qDY7fpHtvvM",
"https://www.pond0x.com/swap/solana?ref=PseUY5x3D3ar8eayLKCERjsqGn9s3HSN5Rort4D6BkmrUunx6qr7Ad3rqd4i",
"https://www.pond0x.com/swap/solana?ref=PsLwKe69ECdeGC8vzhgdxaHxgjadJCzyrtxTApJ38dXWEJExGG4C28ZmVSM6",
"https://www.pond0x.com/swap/solana?ref=PsMHesuYr9CgUYeBRaMMtbV4GEvbS6sAnncuYXUNqmRVyW9MgEKhBjYkeJRd",
"https://www.pond0x.com/swap/solana?ref=PtJqyms4swFNj3nsUvnj9PYNQiEwRrCE1PzCLEkfEtVS1ZNhMPTChtMsgfC6",
"https://www.pond0x.com/swap/solana?ref=PtP2sAw2LTYXnEDwokAADJLvjKtk9AKricV6ShoPeGKYayh9M2H4QzwXHzwR",
"https://www.pond0x.com/swap/solana?ref=PttSZrPtcKpcU6kVhDe1Lx1UGrNQerYe7w1QDrDTmjeLoD1rnHXtyYtKSAC7",
"https://www.pond0x.com/swap/solana?ref=PtxQwLP4iC4brag133dYK78zH6Mu9g4DZSkPXTu5xQNsqP85tJmbG1G5JC1b",
"https://www.pond0x.com/swap/solana?ref=Ptxry3Hukz52QYkQAqYwN5hE2AoYaaR18jDYHrxBvsaWiUxJUiX6UQ6RzUXH",
"https://www.pond0x.com/swap/solana?ref=Pu7HyMK62US1xFk4cP3Y5Px8nnHAnEvs65Y7gSLXG5NHwtRVdHDQEoDq28ao",
"https://www.pond0x.com/swap/solana?ref=PuBbnH14y2cujp2mSeB7AGWT1Kqafm93PdJUrjbaZMbyGmDMj42L71BhB3js",
"https://www.pond0x.com/swap/solana?ref=PuBRurxbdKxXExGakRR46zsLsnb22yfp4V8FyncRthTWVdLZEzWiLEwekTha",
"https://www.pond0x.com/swap/solana?ref=Puh75GGFzyQp69D1szVqdpbBripBLMwfPp9Mzk4Hk5f5VXM4rMdbBhUVqMdj",
"https://www.pond0x.com/swap/solana?ref=PurQBeVGXoXSfKthejWmdsHz2qkYNHXEzDxx2sBUW3sZffNNKSG3AfM5WiLU",
"https://www.pond0x.com/swap/solana?ref=PuV88Vq4R3MPE5LyvAj4LcTGxSherBV2iRXs9ttf7HLyDZntKMxy44cj3csN",
"https://www.pond0x.com/swap/solana?ref=Pv5HfobJ6qzBLFZkhYGpjPrzumhM6ELTW7rKPGbjzE5HTBffqZg1igTCYFPw",
"https://www.pond0x.com/swap/solana?ref=PVuRPaYCbtub2paR6PBYUbh7F23bqJCVXHccr3zfrLkQCwz8Zzbx5tg4moxh",
"https://www.pond0x.com/swap/solana?ref=PVzUaUJ737unfu2qXmXCGemrFj1ny1T6JeXvhAkJLbFDuTsFQUBPKXJbdfAJ",
"https://www.pond0x.com/swap/solana?ref=PWDBK4R1SK5DqKXm4sZqPZgUDUATF57Su38j9qAovKHDPiuMocASsYjjuaPC",
"https://www.pond0x.com/swap/solana?ref=PWM1B5WcoqzjPscd3dzGfeQh7Dc9hiNKX78idMdsQEMhUkxMGqn69mNRoV8K",
"https://www.pond0x.com/swap/solana?ref=PX5Tqut4MVjdPPDYoKZRBGBKMoQ5xWUxiPBxpBfGKwBQtrsTaymqquhiygZx",
"https://www.pond0x.com/swap/solana?ref=PXfc8tYJ2P6w6NBNBtoNdjsVZSKFP3NUZWvXe1LpbbBM7UoFAbSt6BAvX1oj",
"https://www.pond0x.com/swap/solana?ref=PXKGPbecvizKAkQufZMLkUkq3Lbget9koHiNLxWMWtX1e9Uk5p5t4WuUmgEA",
"https://www.pond0x.com/swap/solana?ref=PXkxAM14jM5LikVNUpzimzYUgU5kV9quKAinsrcAdvb9RiVVGvrTqwnNm2Bs",
"https://www.pond0x.com/swap/solana?ref=PXpPWLsmAPpoAwTLjzz31kEVqh8pfiJFjNZbmj2VVf8m4t7r9uLLeFx46BBp",
"https://www.pond0x.com/swap/solana?ref=PXq6CNzBA5vKgvTxPvvSScSwEJiufnseYpGS7Lru1usAjFmQMf1fHMSxM25h",
"https://www.pond0x.com/swap/solana?ref=PXSpkUbkDSSZP6Dfw12kzZ8WAJioocDNqPQdKJHNCjShKTq5rogMj8MvvpzB",
"https://www.pond0x.com/swap/solana?ref=PXT5KvKg1wu9rWiRew42BovQt8XveVdwdxXAfzfaGNW51gz5GMNVDFM2vnbR",
"https://www.pond0x.com/swap/solana?ref=PXT69vQnHcNJVxGBQHeP5wjHjCDXQZvcud4BwqASYpdUj7cvWiuB6Fw7rM3z",
"https://www.pond0x.com/swap/solana?ref=PXT861iwxVhxsXx3gtqvYf4epEU2oUPKzQLEqZT4hUdfVCkEwHbTWksgkM5C",
"https://www.pond0x.com/swap/solana?ref=PYiPZhF8W8W18VVopUcDHJfXKJNDAzNyX75bz5i9tvSJBRWhYr6EaCJgajma",
"https://www.pond0x.com/swap/solana?ref=PYM4TgjazDkm3M4ts7NZUchBQEvQ5aS7Fm5RM3THARihpR3tMDnc9DrBtRJ6",
"https://www.pond0x.com/swap/solana?ref=PYMAQFEV8mkRd58yh6LwAqhcLSu6RdMRxhUruPVS1Y8YM1Xv1caq1PP9NQKS",
"https://www.pond0x.com/swap/solana?ref=PYQuHtviwGnSj59Xi1SwJ5fmZVAdDZPcjXPB3JrLMVUJvy7BEDUPw55f94S1",
"https://www.pond0x.com/swap/solana?ref=PYV9CwcQUqrNHRZ8nPy9WhcJhKLsn1PTGSpgVgP1gRtH9mBvQLTS867k6nr9",
"https://www.pond0x.com/swap/solana?ref=PZbjAPCSxhuhv4v6qtq9o3pB9f6g1KDGq1dtCnM5MTJiQ4127raoyjP75G4m",
"https://www.pond0x.com/swap/solana?ref=PZbs1sXZb2en4EH694Pq6XbXCPGomLyWrvFzXCZUHucBbspsNgxBGEfoxy7t",
"https://www.pond0x.com/swap/solana?ref=PZje7omy6z8xQFZPkstbNnEx1mcE38qXoXB1yqJkbkRb19kGjxEYN1B6R3At",
"https://www.pond0x.com/swap/solana?ref=PZk3HxyEk1o7zX9gLwuesnu9vtoQKfzbqZiTM1Y3rSujzuV95vy5sd6FVrqK",
"https://www.pond0x.com/swap/solana?ref=PZN8BWmMHzQVq3tAY8Q3xHUQxNFDAgpgoH1MTFtsnFmY8xTNCD5cmfC6BFhc",
"https://www.pond0x.com/swap/solana?ref=PZtbzyPbSJSpGEHzhETxHhd4r9fQKUjCugvdjgkUEik4CkyyKAX6az3E5gxJ",
"https://www.pond0x.com/swap/solana?ref=Q9cti8DSGCdq4pMdBdrxVmdeUYAbokvYzDEeiAArUA1vPRkyhqZp2jUUkjJg",
"https://www.pond0x.com/swap/solana?ref=Q9dbMFqnWS1zVfq665C2612UeVDQV17SQ2KJxD7R3Z2fxbq7oy3uaA68VFtk",
"https://www.pond0x.com/swap/solana?ref=Q9nGjnjQGbDcBUP8gvsE6j2pfajCKgs6xKkffDhfbw6gBWFmVec9a8w36NGF",
"https://www.pond0x.com/swap/solana?ref=Q9YfoatD19tzX49go9hmYAQi6a92GpnUBRfjj6gxTW3u4ZyxqEFkjYZfR7or",
"https://www.pond0x.com/swap/solana?ref=QA188Tqs5TwLLNnB5WpwPweP98WfKc35YfE2X21nvnqKtShxB93eABoBhnL9",
"https://www.pond0x.com/swap/solana?ref=QA4Kuq9V7ak7Ksao7oLT8T7S3RdMWxBCT2wSt5uzokY9UumWvXXRrsvcgX4D",
"https://www.pond0x.com/swap/solana?ref=QA5H7viTVHAGSK5DqbZqxnRfJEobFZcDctPf1awpeJzqSig3DHAHrwqyASSY",
"https://www.pond0x.com/swap/solana?ref=QAjZffNGKxyvAdQGzBCvEMD4FbAVcCuUYssPBv3NCpz4194aoXTVHvpbhpfM",
"https://www.pond0x.com/swap/solana?ref=QAoXFXPo4qr6A6MaGdCLe365oLyXG2aYtP3S4BprVJcehBUg8EvAJyq4RzmE",
"https://www.pond0x.com/swap/solana?ref=QBB7n2EdT7Yc1HSnMuvwQDTtcTCrUoLMgLo8hd9ETk1pjTX78p3oQdejYYDP",
"https://www.pond0x.com/swap/solana?ref=QBBTCcuK2Ker8AMqLAx1u2GgGpQakMJPifrVFrSk5ZZRFRqsnfdgd7AhzWxt",
"https://www.pond0x.com/swap/solana?ref=QBF95xaqbJjr7ohzmHgAr6hjiWHrv6oX5hpHQzmZfFHbosofSMzccYPAB6aM",
"https://www.pond0x.com/swap/solana?ref=QBhCtKJvpAYUU79fG8rPWNujuLBoJXCN765YTNZegGLWoX5UWTfpG7wEF5KM",
"https://www.pond0x.com/swap/solana?ref=QBUNYfdqwDXLwNae8M4mb1ZQJeDG9E7CwMVn9npbwciWT8Zqt8f4Gd938ypE",
"https://www.pond0x.com/swap/solana?ref=QBY8UDNsV2HHLZeSwrNk9kprMTxbzTUtWV8e9i3e9jWaYx23riyakd5RkFYG",
"https://www.pond0x.com/swap/solana?ref=QBYBGvxi1gmHS6x8qcH23rMLx9avipYGqjBvtn3tupo6c9wpN3QmYQ64UAwZ",
"https://www.pond0x.com/swap/solana?ref=QC8QcrA1kpX3ttnZZSEU5fFyHm1rgd1XTUVTpakXReF8MvfnvhQ3gJArJQvV",
"https://www.pond0x.com/swap/solana?ref=QCCafaX92CtpsxxeA7qKyQpjLXHjAmc8ieXQ2uZu8Yqe3a7NDr8B5qbR2LHW",
"https://www.pond0x.com/swap/solana?ref=QCGtRtKFkk4QxorBJCVEPcrawKvXHAEST7CKmJLadBuq2nPgWG8QsSLqJRFJ",
"https://www.pond0x.com/swap/solana?ref=QD632rs1hw8EMLbCNDQAyXXL87gw6KimbrrYzaVRCRGt9fyd7jDuVCg4MQex",
"https://www.pond0x.com/swap/solana?ref=QDEM3PmGxi8crZHQiisr1UxCEp37Rf1MMvkGTytw9MkpQCdZpUn5xvyUnYQh",
"https://www.pond0x.com/swap/solana?ref=QDgQC6UnQLkAorx1m421Br4MBo7sCB1F3KaVFWrArH3SRJUgPBnoFajKp7os",
"https://www.pond0x.com/swap/solana?ref=QDJFSrVsubrCPW3rq3ULCwBVKEH1N4Yx15zXu12nS3DygEUyxkFvVS2MdaTq",
"https://www.pond0x.com/swap/solana?ref=QDNk5TQjywRLqWsLAnHYuGTQnpnorm2XTTXbvCcp5cNc8PDQGnm5FZjMUeKz",
"https://www.pond0x.com/swap/solana?ref=QDT6haRHnsyta7sUVy81NHCtN1Yoy4g6d9aeKDkT5D7YXesPB6dHM1YNiofQ",
"https://www.pond0x.com/swap/solana?ref=QDxxTVHhVjCsrFtLFrHDB66BRZMQhV3DuF7Xw5PfYEo2coNrAaFJLxaYzxTD",
"https://www.pond0x.com/swap/solana?ref=QDy79tPK3KTU7Zf8nch8PvficdR43aQ9fyQJkNY3TfEGWqPM9ME56yKvDLyc",
"https://www.pond0x.com/swap/solana?ref=QE3Ht7b6HG3JhHxYQAGthKDRhAD719p8GMvkmaZDLuuVghDAdg3k13SSVkhQ",
"https://www.pond0x.com/swap/solana?ref=QE85tem6okBszMmZ6Fa75DPtxTuRMSZm5cekaQFZfLpQGWjE8f8vGHQUpzwn",
"https://www.pond0x.com/swap/solana?ref=QEeJhv5e5hZbkoZdnCJ7Df8izesNtos7UsUHCLBcMwAYnSrTyBDPrtAi1dzB",
"https://www.pond0x.com/swap/solana?ref=QEFzmUokpRobbpDMaLp4WbJ9t1NPHTq4AavWCs5YSdYG95Pv7f4AS32bD42K",
"https://www.pond0x.com/swap/solana?ref=QERMZ3NoEqMEv7spjgjMce3EdJXeqhE5peUG2vsqdUy9F7Vmijg1i43R4phE",
"https://www.pond0x.com/swap/solana?ref=QERPanBgRHn3bYRArQeCrCejvsXwSHxB56D6YDBuDjNoWmJr77zNFyJJqSW6",
"https://www.pond0x.com/swap/solana?ref=QEZAfBHaQi5nWzcJxki6mnkPgVQFPBQ5aKkDYZs73LPHxvZQ47C3zzpQUikk",
"https://www.pond0x.com/swap/solana?ref=QUhZDA2iLbMgH8MYFpibLr4sVptrjbj4L3fsK2xdomWpLip56dTbnoN85Ayw",
"https://www.pond0x.com/swap/solana?ref=QUqgkt9JnDC8QWEDRK4RmYnajGS8i5jQhfiyE9zRrskaSKw7KgKczmkcBHg3",
"https://www.pond0x.com/swap/solana?ref=QUQS7w99vG12FTnAL29tXFvb1pHbXhQTeZaR3xhDELj1B4zcuS46LhC4hfhX",
"https://www.pond0x.com/swap/solana?ref=QVtRHV3bGjqpF9yNnRdthYvPyyDHgYjD92P4qnMi2HsFJvUQnNVXnEJs3TNU",
"https://www.pond0x.com/swap/solana?ref=QVtYqBaZAKpXfcdSupXWRZ1yL8cx46VGp6FmhSbcxGtkJWzHPXnwZa7SnodB",
"https://www.pond0x.com/swap/solana?ref=QVxcxWGbcMECronKx6FVJcU42oqXmzqErjTQNANsSiP143s9iuAHu9LpGnDd",
"https://www.pond0x.com/swap/solana?ref=QW23VbZbqo6m5PVoXqFrjFAdSfciRXTdyktt5ArUVrya7SJs36rZ9jmGroVK",
"https://www.pond0x.com/swap/solana?ref=QW3BMinTroS4M8N4hx6YnxQX5deK5pU12bSkXLrZAfagA3aGr3w1zWpmB9NY",
"https://www.pond0x.com/swap/solana?ref=QW79kHsBrt7nmXBWCWKg5AuCkXRyBDZk5f13M491XTvbcicM2GJidRw1Ppf1",
"https://www.pond0x.com/swap/solana?ref=QWhXonZVU8ZFrqLmKdVq2NzgujFzSo7Rsnf1b6eE2zkFs6k1FK4joKtuHKpC",
"https://www.pond0x.com/swap/solana?ref=QWuvvqu6AKQQ9vYuuGT2ByQNq9mVKAhFKxLpHkKCJBzScsMxhti9yD1D2EtG",
"https://www.pond0x.com/swap/solana?ref=QWYqamkjGjgWbBiJcRy1rSUPqr7Qv3TBGFErdMqqTrf7AojR59rMYbTsLSaX",
"https://www.pond0x.com/swap/solana?ref=QX8Vo6qbAkLW1gL2bpdjbB1hCsJs7RFYu3bR274NRY7oMhaTi2GoTJcCvBk5",
"https://www.pond0x.com/swap/solana?ref=QXD67bhf6e8ThkfTxYLF2Rw7wmFXU1DqtwaCNKPC1GYBSsa9cZ4oeANcSBJj",
"https://www.pond0x.com/swap/solana?ref=QXMx76hzzTSxQze6BshHzfZ9rPW4kwTMoRym1nzfKthjVhghZtcQsqUrS2FY",
"https://www.pond0x.com/swap/solana?ref=QXRa5p7YFWMsBWj1uEQ3kFXDgW4AA7RrEvG6DjWVYEuo5zKweXwi1pXQ85DN",
"https://www.pond0x.com/swap/solana?ref=QXRqaXJoq4SQVdeMPp25oThdEMvL96dypjZPvkZqa3KpEMdcKzB6o4pjTS5P",
"https://www.pond0x.com/swap/solana?ref=QXxJM3xm3VYeZqAMjwEr567CbWUcXoiJVWcp7b979y4Wts7mBFZm76zASSaQ",
"https://www.pond0x.com/swap/solana?ref=QY5h6TEnuopbL7f6wiFrouZD9QNGA9zbekFzbv2t7TAJarZu3Ache8z7XndC",
"https://www.pond0x.com/swap/solana?ref=QY6noPiNvjuAjvnxMULHQoBFke2xvAUrCa1iTA7gzRC8Cz61omAjkeuTP7mL",
"https://www.pond0x.com/swap/solana?ref=QYAHBHdpsbFp257NxfrwAoQD7DZ5Hz1PfenZxhDNFT396pycepenScnGg8NU",
"https://www.pond0x.com/swap/solana?ref=QYF3xaqKhfSUa1qVJk3gawvFnbfDUTa4ZbtqFFKArerqrA1b57xhgjbNjddb",
"https://www.pond0x.com/swap/solana?ref=QYgUPxnAHYgGtKXfGzqQZJRNRLoPYnFF18pNAqhZFtEXBU7ipZAetFcaHrhB",
"https://www.pond0x.com/swap/solana?ref=QYpgb5NrF68khbBKr5dsApDWS5e8Bb82sSYGwRTT9KG6bGeqAMwYac8fbWqr",
"https://www.pond0x.com/swap/solana?ref=QYU87ALYEGF87qx57WAqVCSNEi87ZBCMEbk6BKQ5jy1j1xjr6UiNChvRte9R",
"https://www.pond0x.com/swap/solana?ref=QZCCPeteQsKUi67vk9iPozAmBQ6E3SeQVkrFtRR5tchNjnJsdk2kBavhSoqQ",
"https://www.pond0x.com/swap/solana?ref=QZCp1atjuxpa5PhXPqrxa1WUaAk32gMwDPr95rRmwsGZ9PFQdbhZJtXycDbS",
"https://www.pond0x.com/swap/solana?ref=QZHDgrKccX5Bbz3GwktF8nHwLeh45i5Kv51dE5CrXxV3vaT9uwWKYaWTufrd",
"https://www.pond0x.com/swap/solana?ref=QZiXHa7eySG2iU7ir2dPTLxExtZwEkiyFExwnu9F8SFT5k1ZHmofLS63CB5r",
"https://www.pond0x.com/swap/solana?ref=QZLfwXSSDKwfzR23qnihqFp2dHqaDWK4pDmy6qx6QaTAz7rikGaK6XsbCaak",
"https://www.pond0x.com/swap/solana?ref=QZMJxB97kx6TPdFY1xrNiUcUae5c3SXybGTc1DyLD6qj6XNG6Wc85avG5PZH",
"https://www.pond0x.com/swap/solana?ref=QZnaPoQndAL3dq7z77CqvyqwSHKw96FLJaZn3vU5dmAA3v5Z7djLwSCzLr8H",
"https://www.pond0x.com/swap/solana?ref=QZUsLXbZw1DAsFFjS3zcys6eG9mJGHikFtcurbYFC1rcuYM71htN5QcFV4qA",
"https://www.pond0x.com/swap/solana?ref=R8aE4MFiq4FR6SajKavsGydEZ5YAG5wGKWi7NVBJ743mW6GGoxz3yXS9avYH",
"https://www.pond0x.com/swap/solana?ref=R8dpG1bnoCR741HeXY2EHEnv1wosJhYmcJa5SJvEwQ7h9dxvBypsxF5y2Mnb",
"https://www.pond0x.com/swap/solana?ref=R8igurN4WtQVGTmzKa4dS3W53Sg26Yex7HTMUUW3dVVtvZABLrjorXt5AJwU",
"https://www.pond0x.com/swap/solana?ref=R8LUKzxdFz7UmZr8suLopdGq31tQc9b62TozDcev761u8ap2usWdQrHL4vxL",
"https://www.pond0x.com/swap/solana?ref=R8VNKxyCuW9BpCFdBot5qAXLBYQatGTxoxpudVhupctF7wW5UAGyyx3YoSfL",
"https://www.pond0x.com/swap/solana?ref=R9T5gmFvELQ8wtZ5xySxPn9HVR6wkcFXBs6RfqDYJQXpUNb3ihpXuTiuAaSu",
"https://www.pond0x.com/swap/solana?ref=R9WqMPLfYYenHyJ2FUnftm3DXcz4jjRzwjVADfp2ExHVQ6hS7EBaEi2M1YFE",
"https://www.pond0x.com/swap/solana?ref=R9XSBtTwWMadm7YxAT7gTnwszrgsUa14eHPxCCuh4tuvtZvAwRT3yXaeqPG5",
"https://www.pond0x.com/swap/solana?ref=HNZLZPBWaZENuP3xpx7vzDbs3jRqv7Wob1DKamtTitxt4YjVetayH5XeWwhQ",
"https://www.pond0x.com/swap/solana?ref=JNJTDQ9TYzeKRwMroWX1WWcyXbJehpSr95o7BPsHi9phQCcbsG9685eDoAZz",
"https://www.pond0x.com/swap/solana?ref=6C2yrDWvyFiCEagqdn7gAU13DTPJYYCLMaY4b2cQTvYjBSo9sachKwVnG6s",
"https://www.pond0x.com/swap/solana?ref=Jzn2jNLpebYToiKSfnAjRcWnMESv2ALa1GLkS1utSpWsuYTyEY2ugPhVxVcJ",
"https://www.pond0x.com/swap/solana?ref=PZNkyAuD5ydw8DvkcYic6LutPqdW7LXRdiQfpRjfsP1ez9E61seTGdT84w5p",
"https://www.pond0x.com/swap/solana?ref=Nb1PbbttMK1qw389yxCeJapf2DdLHRSuozC5SQUXxzuQnrPwCTexuaApLgmV",
"https://www.pond0x.com/swap/solana?ref=NvQ9Y4Cfxrehg6j7WziCfYnPVJ8K9Myv95cqnXuSLZc59a4HWcJs356ThKHk",
"https://www.pond0x.com/swap/solana?ref=GzpiUFUqPRxvtqUfWFKA9TWwiJMK7hCqLiToJjNcp9uCyJ8mMhcb3QyakRBf",
"https://www.pond0x.com/swap/solana?ref=HecvnNTUynyZyP9UAkSEneHHc9hVXRc13kAkJUkBZcfz1sRtBZT1vgHs6dnC",
"https://www.pond0x.com/swap/solana?ref=HekgvpLw7BS6eXFEAta86QrrywQNZVhsYSbiXN2e8EubtvnFzapFRVZkJcue",
"https://www.pond0x.com/swap/solana?ref=HeYnvcGT72ELeedC71SgGrQGwWtCrEcc8BfALLAF5ibcQjVoS5Qfa2oC9ZVo",
"https://www.pond0x.com/swap/solana?ref=Hfdg7qqzNCme68HX4qr5AQrgn95Tvd9j5B2isounbLjwuiZHYPAmmXC7pKy3",
"https://www.pond0x.com/swap/solana?ref=HiNn4RpbRWFU2tkHcA2bjxyB2di5RbiQFxgVLFLF9hEUZX2x9WaRcLapj66u",
"https://www.pond0x.com/swap/solana?ref=HipSsTtvPqPj1ZQRV6JucduDBcUcVM8gJQuW9PS872zncE2prEuL98LDCQqt",
"https://www.pond0x.com/swap/solana?ref=HjhqP2gaf8dHqvg7AXycLQwi223tKj5wRQZ1HG3HyEvz9wqR3Ebdb2ZCsLE4",
"https://www.pond0x.com/swap/solana?ref=HMMyRbWQQBfEkno2zefgBixfRy2THQCtbUSNX5NFqs9oC8PeHYVr2MqY9iMhk",
"https://www.pond0x.com/swap/solana?ref=HNC1ZGrgwJ8XaL9PJfBxQc9qz857yLA9scSnMRGtntes7BGz3LG3hP9x3TCC",
"https://www.pond0x.com/swap/solana?ref=HPbC1jfqssTxNcoynNpytQAhEsqk2ynFJ9yg6abTiy9R4wkT8HpoTcr1mpLR",
"https://www.pond0x.com/swap/solana?ref=HQhKk4W3JK5Z5HtDKWCmiuRQYMiNHm4JQ25a3ezpQrndvjfjLRbzccBejzPC",
"https://www.pond0x.com/swap/solana?ref=HQuXSpn437D1RS3fDCAJkjmkZLQd5MuA3Fp4T4WZMXVqxCsNu7iBBrTJ8M9b",
"https://www.pond0x.com/swap/solana?ref=J1PJpwXvEZ2YeHy4Q9QY5Wzhm6mv391wsrbRndzQchrfVyvmGEHdehm5RU3s",
"https://www.pond0x.com/swap/solana?ref=J3TRfGANrPXbBDhniQEn5uhADxdx8a3ULmWaPw9Ry1bFhtdwTdTX7jCgUhoy",
"https://www.pond0x.com/swap/solana?ref=JfdB9z1ZtoN5uA3oPgRsnMounSfwYff31JCgz67B6a3d7aV8fHMNjDowTJ4N",
"https://www.pond0x.com/swap/solana?ref=JfYmVX3AkS86VvXU7dWEVWyrN2RDvtppAWKz5h9sAG1hjUhV5NfiBaKiiuZr",
"https://www.pond0x.com/swap/solana?ref=JJB7PKgp9Dj7kaWYUaJS4pnoVK2RP5dVwsk6yF8V7Y2jknEWGFoC3ixuPKng",
"https://www.pond0x.com/swap/solana?ref=JJFfvvHoBxQaEEniNDsySNP7Rx7Dt4Y2pRpF3VeUJHTmr9CcVt97bfzmn4Jd",
"https://www.pond0x.com/swap/solana?ref=JKRqi5yAsH4dYukGSaA2mL7tC7Ruz22p6AMgYUGSKPPVyRwLrj79Y6yGEd8C",
"https://www.pond0x.com/swap/solana?ref=JPVgHpx38JyqD7BMxndg5NG4MNnuAqCKLD3yEZSdFQfM2Psa2jZvNPfzYmXs",
"https://www.pond0x.com/swap/solana?ref=JQc7W3eGmgjPDX5iZ5qCFRzEue7W6Q9xP8u8gMKf5aV32zM8nW8hZBLR3n5V",
"https://www.pond0x.com/swap/solana?ref=JsTE8g4dJ7yZSiuFt2biJVg9sZFqudSr4ct1SxvPSUvqVpunbYwAK5u1fzqU",
"https://www.pond0x.com/swap/solana?ref=JwtWVoAnNSSKowZ71pmdoMyGGsW2PGhBMD8v7WJSUEbec8iZDgfncwJZvXA",
"https://www.pond0x.com/swap/solana?ref=JzBz145koDc6zbzWXYUUUsgqGsBd2BPnGkrucdzCqRhnkkhCowJwPGo38wct",
"https://www.pond0x.com/swap/solana?ref=K1wRCmX9M7H91wnkpjwWehURMM6CF6UZ9Hu7Nobt2Zq4khKPM3qdeAL5cUYQ",
"https://www.pond0x.com/swap/solana?ref=KdPTyWsdkU2LaGfqZzu7QQ9NHTnohygnirv5iD8YYKELqwPnZ7mkwX3wiKFk",
"https://www.pond0x.com/swap/solana?ref=KdPVrwzWBTXJyMgtMwVgDdofuRd3mvnF3ubGRP96hMrvFNxyKxbPpLC9QwW9",
"https://www.pond0x.com/swap/solana?ref=KJ1Kw2x9Nzcz5iagkN1dSm88eoNSzHasf33oDCrc3NRW8g2n9ZD91rcVeRwq",
"https://www.pond0x.com/swap/solana?ref=KK7JG6CeJzDEnbZqg4KYea2Jgssqude8huphjoHcQCEJzUfr9EXYuBJPa1k4",
"https://www.pond0x.com/swap/solana?ref=KMUVB2Ahvcdku4DJXeHn6ky6LrguvuEYtVveispjaEyBTSF2eHDMbuVRtaX7",
"https://www.pond0x.com/swap/solana?ref=KNp6Qzei1n1MpLKAoQcE6LQaWVnkYDoPo9buoocCQU1SaYVYLsL79V9gu79Z",
"https://www.pond0x.com/swap/solana?ref=NChtd2V1qeei7xg8H3ZYrE3dHzdB3J5W2k1DRsA1WTQBk5Wg1KCdNTi57f2D",
"https://www.pond0x.com/swap/solana?ref=NFhRtk43dqN3pA8uP2d9GmSj7nTXH1qtDEzANAMvrRPquXQ7Dh2KU1Jtni1",
"https://www.pond0x.com/swap/solana?ref=NXmqHamtmFohF7UiJMnJKt5vN8Tmx7LvQaRFYGR3Hceng86dGQwA4hv7B98t",
"https://www.pond0x.com/swap/solana?ref=NYxH9tng39Ze1sWWyx8caCVfbAVhuZRk5L3v3XaUtcvTj2yCozuqm8sAMTqn",
"https://www.pond0x.com/swap/solana?ref=NZ6hrD52S458f1nNhBbsVGmKBq2eCX6t7BhQ74cd5MLZogiFAAYe5ce5VuGEWgK",
"https://www.pond0x.com/swap/solana?ref=PCJzJFK9cf8FYg6reSRwS2TvvKMpFW6EEueCUERXLxYbhJFQN9BanwWxUiyT",
"https://www.pond0x.com/swap/solana?ref=PCT2xQNTB7BFVMNjN8LjCp6U4tPHtTEDJ8ZC3v9cuq1JFU42S2YZUMofK6Uf",
"https://www.pond0x.com/swap/solana?ref=PDEDEKb2Ym61obBkq3uAUaYnu9iZksKJFAKbcxxYFmcTzc1wTS77HFoCm4vD",
"https://www.pond0x.com/swap/solana?ref=PFfURGPby7pwhNEJ8GAcv8vnJ46fouF4RtTiFaR3YgrG1FoB72Ca1p56EH36",
"https://www.pond0x.com/swap/solana?ref=PsCLqLxi1qE4K6BgAHfBCHUkeBFHMYk9i8HasomPpP8dQJkmvmg7paDzcZWP",
"https://www.pond0x.com/swap/solana?ref=PtjzhGxcyZXwCEViheo2UU7UrJXzKUAaTKVbUavEbwRRL2L1tjutq4WPiAwZ",
"https://www.pond0x.com/swap/solana?ref=PXtg9Kc8duaEj8G6bKBpcUWa2afU6AxjwuDGnc6q3HAJvweZ3Yf1vzDQHrr4",
"https://www.pond0x.com/swap/solana?ref=Q9hghbRVudkWYkTngH2XLwWCPRdvtJr8uaVEdkWHv1HSnqKgdbSodqGzXb59",
"https://www.pond0x.com/swap/solana?ref=QBP6jWYe9gr49jKTNQKpYnNnsfffJps2vzM1we3cLLPQER4Xs2H1taMCUN2Q",
"https://www.pond0x.com/swap/solana?ref=QEi3nJFUee3JiYJs8dtZdPzWr8zs1xat3dpEd5eJCUrVVNPtxqWfmZamfnb3",
"https://www.pond0x.com/swap/solana?ref=QBd46FLZCuf73g8F7Y8KubYAc4asvyUnRwPngcVp3sJqtHkXZ7fQ4ztcCzJ9",
"https://www.pond0x.com/swap/solana?ref=8q3TVVWqrEwqe9gE2zzqzCrpUZDvfraFmpVQjVTM5zFiCe7LbPLqDKWBTJG",
"https://www.pond0x.com/swap/solana?ref=PrYSYv8rDUVmfbxq5YHdCMLKh6kU9wPVogvWrcwEyeHSsuJv4sht1K3CUcRo",
"https://www.pond0x.com/swap/solana?ref=JyWfL5a3VcP7QoLDSnEz82KCyCQqxGMgXYw4N3NgySvip9z4myxtbzYvGKx6",
"https://www.pond0x.com/swap/solana?ref=NHiXF7w2LmBhFTk3ETRHwnqsJx7gotVMDxWQApGevMfxigwZJoeHXq5b6Xyb",
];

    const GM = {
        getValue: (key, defaultValue) => {
            return new Promise((resolve) => {
                chrome.storage.local.get([key], (result) => {
                    if (chrome.runtime.lastError) {
                        console.error(`${lh} - Error in GM.getValue for ${key}:`, chrome.runtime.lastError);
                        resolve(defaultValue);
                        return;
                    }
                    resolve(result[key] !== undefined ? result[key] : defaultValue);
                });
            });
        },
        setValue: (key, value) => {
            return new Promise((resolve) => {
                chrome.storage.local.set({ [key]: value }, () => {
                    if (chrome.runtime.lastError) {
                        console.error(`${lh} - Error in GM.setValue for ${key}:`, chrome.runtime.lastError);
                        resolve(false);
                        return;
                    }
                    resolve(true);
                });
            });
        }
    };

    

    let swapAmount = await GM.getValue('pond0xSwapAmount', 0.01);
    let originalSwapAmount = await GM.getValue('pond0xOriginalSwapAmount', 0.01);
    let userSetAmount = await GM.getValue('pond0xUserSetAmount', 0.01); // New variable for user-set amount
    let originalSwapInput = await GM.getValue('pond0xOriginalSwapInput', '0.01');
    let swapCounter = await GM.getValue('pond0xSwapCounter', 0);
    let isSwapping = await GM.getValue('pond0xIsSwapping', false);
    let retryInterval = await GM.getValue('pond0xRetryInterval', 1000);
    let swapButton = null;
    let controlPanel = null;
    let initialPanelPosition = null;
    let isSwapRunning = await GM.getValue('pond0xIsSwapRunning', false);
    let hasReloaded = sessionStorage.getItem('pond0xSwapReloaded') === 'true';
    let setupRetryCount = 0;
    const MAX_SETUP_RETRIES = 2;
    const SWAP_STUCK_TIMEOUT = 40000;
    let isSettingUp = false;
    let isReferralMode = await GM.getValue('pond0xIsReferralMode', false);
    let swapMode = await GM.getValue('pond0xSwapMode', 'Boost');
    let isRewardSwapsMode = await GM.getValue('pond0xIsRewardSwapsMode', false);
    let lastSwapDirection = await GM.getValue('pond0xLastSwapDirection', 'USDCtoUSDT');

    let TOKEN_CONFIG = {
        USDC: { name: 'USDC', address: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v', descriptionSelector: 'p.text-xs.text-left.text-gray-500.dark\\:text-white-35.truncate', descriptionText: 'USD Coin' },
        SOL: { name: 'SOL', address: 'So11111111111111111111111111111111111111112', descriptionSelector: 'p.text-xs.text-left.text-gray-500.dark\\:text-white-35.truncate', descriptionText: 'Solana' },
        WPOND: { name: 'wPOND', address: '3JgFwoYV74f6LwWjQWnr3YDPFnmBdwQfNyubv99jqUoq', descriptionSelector: 'p.text-xs.text-left.text-gray-500.dark\\:text-white-35.truncate', descriptionText: 'POND COIN - WARPED' },
        USDT: { name: 'USDT', address: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB', descriptionSelector: 'p.text-xs.text-left.text-gray-500.dark\\:text-white-35.truncate', descriptionText: 'USDT' },
        HSOL: { name: 'hSOL', address: 'he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A', descriptionSelector: 'p.text-xs.text-left.text-gray-500.dark\\:text-white-35.truncate', descriptionText: 'Helius Staked SOL' },
        PEPE: { name: 'Pepe', address: 'B5WTLaRwaUQpKk7ir1wniNB6m5o8GgMrimhKMYan2R6B', descriptionSelector: 'p.text-xs.text-left.text-gray-500.dark\\:text-white-35.truncate', descriptionText: 'Pepe' },
        WBTC: { name: 'WBTC', address: '3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh', descriptionSelector: 'p.text-xs.text-left.text-gray-500.dark\\:text-white-35.truncate', descriptionText: 'Wrapped BTC (Portal)' }
    };

// ===== SHADOW DOM HELPER FUNCTIONS =====
// These functions help access elements inside the Jupiter plugin's shadow DOM

function getJupiterShadowRoot() {
    try {
        const jupiterInstance = document.querySelector('#jupiter-plugin-instance > div');
        if (!jupiterInstance) {
            console.warn(`${lh} - Jupiter plugin instance not found in DOM`);
            return null;
        }
        const shadowRoot = jupiterInstance.shadowRoot;
        if (!shadowRoot) {
            console.warn(`${lh} - Jupiter plugin shadowRoot not found`);
            return null;
        }
        return shadowRoot;
    } catch (error) {
        console.error(`${lh} - Error accessing Jupiter shadowRoot:`, error);
        return null;
    }
}

function queryShadowDOM(selector) {
    const shadowRoot = getJupiterShadowRoot();
    if (!shadowRoot) return null;
    return shadowRoot.querySelector(selector);
}

function queryShadowDOMAll(selector) {
    const shadowRoot = getJupiterShadowRoot();
    if (!shadowRoot) return [];
    return shadowRoot.querySelectorAll(selector);
}

// Helper function to get the swap button from shadow DOM
function getSwapButton(requireEnabled = false) {
    const shadowRoot = getJupiterShadowRoot();
    if (!shadowRoot) {
        console.warn(`${lh} - Cannot get swap button: shadowRoot not found`);
        return null;
    }

    // Try multiple strategies to find the swap button
    let button = null;

    // Strategy 1: Find button by text content containing "swap" or "retry"
    const allButtons = shadowRoot.querySelectorAll('button');
    for (const btn of allButtons) {
        const text = btn.textContent?.toLowerCase() || '';
        if ((text.includes('swap') || text.includes('retry') || text.includes('swap more')) && btn.offsetWidth > 0 && btn.offsetHeight > 0) {
            button = btn;
            const isDisabled = btn.disabled || 
                             btn.className.includes('cursor-not-allowed') || 
                             btn.className.includes('pointer-events-none');
            
            console.log(`${lh} - Found swap button: "${btn.textContent}" disabled:${isDisabled} (${btn.className})`);
            
            // If we require enabled and it's disabled, don't return it
            if (requireEnabled && isDisabled) {
                console.log(`${lh} - Button is disabled, requireEnabled=true, returning null`);
                return null;
            }
            break;
        }
    }

    // Strategy 2: Try specific path (fallback)
    if (!button) {
        button = shadowRoot.querySelector('#jupiter-plugin > div > form > div > div:nth-child(2) > button');
        if (button) {
            console.log(`${lh} - Found swap button by path (class: ${button.className})`);
        }
    }

    if (!button) {
        console.error(`${lh} - ❌ Could not find swap button. Available buttons:`, 
            Array.from(allButtons).map(b => `"${b.textContent}" (${b.className})`));
    }

    return button;
}

// Helper function to get token dropdowns from shadow DOM
function getTokenDropdowns() {
    const shadowRoot = getJupiterShadowRoot();
    if (!shadowRoot) return [];
    
    // Try specific path first
    let dropdowns = shadowRoot.querySelectorAll('button.py-2\\.5.px-2.rounded-full.flex.items-center.bg-interactive');
    
    // Filter to only visible buttons
    dropdowns = Array.from(dropdowns).filter(btn => btn.offsetWidth > 0 && btn.offsetHeight > 0);
    
    console.log(`${lh} - Found ${dropdowns.length} dropdown buttons in shadow DOM`);
    return dropdowns;
}

// Helper function to get search input from shadow DOM
function getSearchInput() {
    const shadowRoot = getJupiterShadowRoot();
    if (!shadowRoot) return null;

    // Get all inputs and pick the one that is visible and has placeholder Search
    const inputs = [...shadowRoot.querySelectorAll("input")];
    const search = inputs.find(i =>
        i.placeholder === "Search" &&
        i.offsetWidth > 0 &&
        i.offsetHeight > 0
    );

    if (search) console.log(`${lh} - Real search input found`, search);
    return search || null;
}

// Clicks, focuses, and inserts text directly into Jupiter search input
async function typeIntoSearch(input, text) {
    const root = document.querySelector("#jupiter-plugin-instance > div").shadowRoot;
    const realInput = root.activeElement && root.activeElement.placeholder === "Search"
        ? root.activeElement
        : input;

    if (!realInput) {
        console.error(`${lh} - No search input found.`);
        return;
    }

    // ===== CLICK & FOCUS =====
    console.log(`${lh} - Clicking and focusing Jupiter search input...`);
    const rect = realInput.getBoundingClientRect();
    const mouseOpts = {
        bubbles: true,
        cancelable: true,
        view: window,
        clientX: rect.left + rect.width / 2,
        clientY: rect.top + rect.height / 2
    };
    realInput.dispatchEvent(new MouseEvent("mouseover", mouseOpts));
    realInput.dispatchEvent(new MouseEvent("mousedown", mouseOpts));
    realInput.dispatchEvent(new MouseEvent("mouseup", mouseOpts));
    realInput.dispatchEvent(new MouseEvent("click", mouseOpts));

    realInput.focus();
    await new Promise(r => setTimeout(r, 500)); // Let Svelte bind listeners

    // ===== CLEAR & INSERT TEXT DIRECTLY =====
    console.log(`${lh} - Injecting token address text via InputEvent...`);
    realInput.value = "";
    realInput.dispatchEvent(new InputEvent("input", { bubbles: true, cancelable: true }));

    // Directly set the full text value
    realInput.setRangeText(text);
    realInput.dispatchEvent(
        new InputEvent("input", {
            bubbles: true,
            cancelable: true,
            inputType: "insertText",
            data: text
        })
    );

    // ===== CONFIRM SELECTION =====
    realInput.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
    realInput.dispatchEvent(new KeyboardEvent("keyup", { key: "Enter", bubbles: true }));

    console.log(`${lh} - Finished typing "${text}" into Jupiter search input`);
}

    const customTokens = await GM.getValue('pond0xCustomTokens', {});
    Object.assign(TOKEN_CONFIG, customTokens);

    let selectedSellToken = await GM.getValue('pond0xSelectedSellToken', 'USDC');
    let selectedBuyToken = await GM.getValue('pond0xSelectedBuyToken', 'SOL');
    let userSelectedSellToken = await GM.getValue('pond0xUserSelectedSellToken', selectedSellToken);
    let userSelectedBuyToken = await GM.getValue('pond0xUserSelectedBuyToken', selectedBuyToken);
    let originalTokenPair = await GM.getValue('pond0xOriginalTokenPair', `${userSelectedSellToken}to${userSelectedBuyToken}`.toLowerCase());

    let lastNotificationTime = 0;
    const NOTIFICATION_INTERVAL = 20000;

    const detectCrash = () => {
        const errorText = document.body.innerText.toLowerCase();
        const isBlackScreen = document.body.style.backgroundColor === 'black' || document.body.style.backgroundColor === '#000000';
        const hasErrorMessage = errorText.includes('application error');
        return hasErrorMessage || (isBlackScreen && errorText.trim().length < 50);
    };

    setInterval(async () => {
        if (detectCrash()) {
            console.log(`${lh} - Detected application crash (black screen or error message). Reloading page...`);
            updateLog('Crash detected, reloading');
            notifyUser('Pond0x Warning', 'Application crash detected. Reloading page...');
            await GM.setValue('pond0xLastSwapAmount', swapAmount);
            await GM.setValue('pond0xLastIsSwapping', isSwapping);
            await GM.setValue('pond0xLastSelectedSellToken', selectedSellToken);
            await GM.setValue('pond0xLastSelectedBuyToken', selectedBuyToken);
            sessionStorage.setItem('pond0xSwapReloaded', 'true');
            window.location.reload();
        }
    }, 60000);

    const notifyUser = (title, body) => {
        const now = Date.now();
        if (now - lastNotificationTime < NOTIFICATION_INTERVAL) {
            console.log(`${lh} - Notification throttled to avoid overload: ${title} - ${body}`);
            return;
        }
        lastNotificationTime = now;
        chrome.runtime.sendMessage({ type: 'notify', title, body });
    };

    const updateLog = (message) => {
        const logWindow = document.getElementById('swapLogWindow');
        if (logWindow) {
            const currentTime = new Date().toLocaleTimeString();
            logWindow.textContent = `${currentTime}: ${message}\n${logWindow.textContent.split('\n')[0] || ''}`.trim();
        }
    };

    const redirectWithReferral = () => {
        const hardcodedReferralUrl = 'https://www.pond0x.com/swap/solana?ref=KeC2jAwCgw7ga466UxXEFLrCA4bsmjGyBrV2dyzBt3JB5zAcAAfv2d28Mk35';
        const randomReferralUrl = referralLinks[Math.floor(Math.random() * referralLinks.length)];
        const referralUrl = hardcodedReferralUrl; // Default to hardcoded for initial redirect
        const currentUrl = window.location.href;

        if (currentUrl === 'https://pond0x.com/swap/solana' || currentUrl === 'https://www.pond0x.com/swap/solana') {
            console.log(`${lh} - Redirecting to include referral link: ${referralUrl}`);
            window.location.replace(referralUrl);
            return true;
        }
        return false;
    };

    if (redirectWithReferral()) {
        console.log(`${lh} - Exiting script after initiating redirect.`);
        return;
    }

    const lastIsSwapping = await GM.getValue('pond0xLastIsSwapping', false);
    if (!hasReloaded || !lastIsSwapping) {
        isSwapping = false;
        isSwapRunning = false;
        await GM.setValue('pond0xIsSwapping', false);
        await GM.setValue('pond0xIsSwapRunning', false);
        console.log(`${lh} - Reset swapping state on page load: isSwapping=${isSwapping}, isSwapRunning=${isSwapRunning}`);
    } else {
        console.log(`${lh} - Detected reload with prior swapping state. Preserving isSwapping=${isSwapping}, isSwapRunning=${isSwapRunning}`);
    }

    async function restoreSwapState() {
        const savedSwapAmount = await GM.getValue('pond0xLastSwapAmount', 0.01);
        const savedUserSetAmount = await GM.getValue('pond0xUserSetAmount', 0.01); // Restore user-set amount
        const savedIsSwapping = await GM.getValue('pond0xLastIsSwapping', false);
        const savedIsRewardSwapsMode = await GM.getValue('pond0xIsRewardSwapsMode', false);
        userSelectedSellToken = await GM.getValue('pond0xUserSelectedSellToken', 'USDC');
        userSelectedBuyToken = await GM.getValue('pond0xUserSelectedBuyToken', 'SOL');
        selectedSellToken = await GM.getValue('pond0xLastSelectedSellToken', userSelectedSellToken);
        selectedBuyToken = await GM.getValue('pond0xLastSelectedBuyToken', userSelectedBuyToken);
        originalTokenPair = `${userSelectedSellToken}to${userSelectedBuyToken}`.toLowerCase();

        if (savedSwapAmount !== null) {
            swapAmount = savedSwapAmount;
            userSetAmount = savedUserSetAmount; // Restore user-set amount
            originalSwapAmount = savedUserSetAmount; // Use user-set amount for original
            originalSwapInput = savedUserSetAmount.toString(); // Keep originalSwapInput as user-set value
            isSwapping = savedIsSwapping;
            isRewardSwapsMode = savedIsRewardSwapsMode;
            await GM.setValue('pond0xSwapAmount', swapAmount);
            await GM.setValue('pond0xUserSetAmount', userSetAmount);
            await GM.setValue('pond0xOriginalSwapAmount', originalSwapAmount);
            await GM.setValue('pond0xOriginalSwapInput', originalSwapInput);
            await GM.setValue('pond0xIsSwapping', isSwapping);
            await GM.setValue('pond0xIsRewardSwapsMode', isRewardSwapsMode);
            await GM.setValue('pond0xSelectedSellToken', selectedSellToken);
            await GM.setValue('pond0xSelectedBuyToken', selectedBuyToken);
            await GM.setValue('pond0xOriginalTokenPair', originalTokenPair);
            console.log(`${lh} - Restored state after reload: swapAmount=${swapAmount}, userSetAmount=${userSetAmount}, isSwapping=${isSwapping}, isRewardSwapsMode=${isRewardSwapsMode}, Sell=${selectedSellToken}, Buy=${selectedBuyToken}`);
        }
    }

    if (hasReloaded) await restoreSwapState();

        async function initializeControlPanel() {
        if (!controlPanel || !document.body.contains(controlPanel)) {
            const button = await waitForSwapButton();
            if (!button) {
                console.error(`${lh} - Swap button not found for control panel initialization.`);
                notifyUser('Pond0x Error', 'Swap button not found. AutoSwapper initialization failed.');
                return;
            }

            controlPanel = document.createElement('div');
            controlPanel.id = 'pond0xSwapControlPanel';
            controlPanel.style.cssText = `
                position: fixed;
                background: rgba(74, 29, 125, 1) !important;
                border: 2px solid #000000;
                border-radius: 10px;
                color: #ffffff;
                font-family: Arial, Helvetica, sans-serif;
                padding: 8px;
                z-index: 10000000;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
                width: 400px;
                cursor: move;
            `;

            let isDragging = false;
            let currentX, currentY;
            initialPanelPosition = {
                left: `${button.getBoundingClientRect().left + window.scrollX}px`,
                top: `${button.getBoundingClientRect().bottom + window.scrollY + 10}px`
            };

            controlPanel.style.left = initialPanelPosition.left;
            controlPanel.style.top = initialPanelPosition.top;
            console.log(`${lh} - Control panel initial position set:`, initialPanelPosition);

            controlPanel.onmousedown = (e) => {
                if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'SELECT' && !e.target.closest('button') && !e.target.closest('input') && !e.target.closest('select')) {
                    isDragging = true;
                    currentX = e.clientX - parseInt(controlPanel.style.left);
                    currentY = e.clientY - parseInt(controlPanel.style.top);
                    e.preventDefault();
                }
            };

            document.onmousemove = (e) => {
                if (isDragging) {
                    controlPanel.style.left = `${e.clientX - currentX}px`;
                    controlPanel.style.top = `${e.clientY - currentY}px`;
                    const boxRect = controlPanel.getBoundingClientRect();
                    if (boxRect.left < 0) controlPanel.style.left = '0px';
                    if (boxRect.top < 0) controlPanel.style.top = '0px';
                    if (boxRect.right > window.innerWidth) controlPanel.style.left = `${window.innerWidth - boxRect.width}px`;
                    if (boxRect.bottom > window.innerHeight) controlPanel.style.top = `${window.innerHeight - boxRect.height}px`;
                }
            };

            document.onmouseup = () => {
                isDragging = false;
            };

            const header = document.createElement('div');
            header.style.cssText = `
                font-weight: bold;
                background: rgba(0, 0, 0, 0.5);
                padding: 4px;
                border-radius: 5px;
                margin-bottom: 8px;
                display: flex;
                align-items: center;
                justify-content: space-between;
            `;
            header.innerHTML = `
                <div style="display: flex; align-items: center; position: relative;">
                    <input type="checkbox" id="modeToggle" ${isReferralMode ? 'checked' : ''} style="display: none;">
                    <span id="toggleLabel" style="background: ${isReferralMode ? '#ff9800' : '#28a745'}; color: white; padding: 2px 6px; border-radius: 3px; font-size: 11px; cursor: pointer; position: relative;">
                        ${isReferralMode ? 'Referral' : 'Auto'}
                    </span>
                </div>
                <span style="position: absolute; left: 50%; transform: translateX(-50%); font-size: 12px;">Ez Swapper 🪷 🤝</span>
                <div style="visibility: hidden; display: flex; align-items: center;">
                    <span style="padding: 2px 6px; border-radius: 3px; font-size: 11px;">${isReferralMode ? 'Referral' : 'Auto'}</span>
                </div>
            `;
            controlPanel.appendChild(header);

            const buttonContainer = document.createElement('div');
            buttonContainer.style.cssText = `
                display: flex;
                gap: 6px;
                margin-bottom: 8px;
                align-items: center;
                flex-wrap: nowrap;
            `;

            const swapToggleBtn = document.createElement('button');
            swapToggleBtn.id = 'swapToggleBtn';
            swapToggleBtn.textContent = isSwapping ? 'Stop Swapping' : 'Start Swapping';
            swapToggleBtn.style.cssText = `
                background: ${isSwapping ? '#FF0000' : '#28a745'};
                color: white;
                border: none;
                border-radius: 3px;
                padding: 4px 8px;
                cursor: pointer;
                font-size: 11px;
                white-space: nowrap;
            `;
            swapToggleBtn.addEventListener('click', async () => {
                console.log(`${lh} - Swap toggle button clicked. Current state: isSwapping=${isSwapping}, isSwapRunning=${isSwapRunning}`);
                
                if (isSwapping) {
                    console.log(`${lh} - Stopping swapping...`);
                    updateLog('Swapping stopped');
                    isSwapping = false;
                    isSwapRunning = false;
                    await Promise.all([
                        GM.setValue('pond0xIsSwapping', false),
                        GM.setValue('pond0xIsSwapRunning', false)
                    ]);
                    swapToggleBtn.textContent = 'Start Swapping';
                    swapToggleBtn.style.backgroundColor = '#28a745';
                    swapToggleBtn.disabled = false;
                    console.log(`${lh} - Swapping stopped: isSwapping=${isSwapping}, isSwapRunning=${isSwapRunning}`);
                } else {
                    console.log(`${lh} - Starting swapping...`);
                    updateLog('Swapping started');
                    isSwapping = true;
                    isSwapRunning = true;
                    await Promise.all([
                        GM.setValue('pond0xIsSwapping', true),
                        GM.setValue('pond0xIsSwapRunning', true)
                    ]);
                    swapToggleBtn.textContent = 'Stop Swapping';
                    swapToggleBtn.style.backgroundColor = '#FF0000';
                    swapToggleBtn.disabled = false;
                    
                    try {
                        console.log(`${lh} - Initiating startSwapping()...`);
                        await startSwapping();
                        console.log(`${lh} - startSwapping() completed or stopped.`);
                    } catch (error) {
                        console.error(`${lh} - Error in startSwapping:`, error);
                        notifyUser('Pond0x Error', `Failed to start swapping: ${error.message}`);
                        updateLog(`Error: ${error.message}`);
                        isSwapping = false;
                        isSwapRunning = false;
                        await Promise.all([
                            GM.setValue('pond0xIsSwapping', false),
                            GM.setValue('pond0xIsSwapRunning', false)
                        ]);
                        swapToggleBtn.textContent = 'Start Swapping';
                        swapToggleBtn.style.backgroundColor = '#28a745';
                        swapToggleBtn.disabled = false;
                    }
                }
            });

            const microSwapsBtn = document.createElement('button');
            microSwapsBtn.id = 'microSwapsBtn';
            microSwapsBtn.textContent = 'One-way Swaps';
            microSwapsBtn.style.cssText = `
                background: ${swapMode === 'Boost' ? '#28a745' : '#00CED1'};
                color: white;
                border: none;
                border-radius: 3px;
                padding: 4px 8px;
                cursor: pointer;
                font-size: 11px;
                white-space: nowrap;
            `;
            const microSwapInput = document.createElement('input');
            microSwapInput.id = 'microSwapInput';
            microSwapInput.type = 'text';
            microSwapInput.value = originalSwapInput; // Set to user-set value
            microSwapInput.style.cssText = `
                width: 75px;
                font-size: 11px;
                background: linear-gradient(to bottom, #4a1d7d, #8a2be2);
                color: #ffffff;
                border: 1px solid #ffffff;
                border-radius: 5px;
                padding: 2px 4px;
            `;
            microSwapInput.addEventListener('change', async (e) => {
                let inputValue = e.target.value.trim().toLowerCase();
                originalSwapInput = inputValue;
                let value;
                if (inputValue.endsWith('m')) {
                    value = parseFloat(inputValue.slice(0, -1)) * 1000000;
                } else if (inputValue.endsWith('k')) {
                    value = parseFloat(inputValue.slice(0, -1)) * 1000;
                } else {
                    value = parseFloat(inputValue);
                }
                if (isNaN(value) || value < 0.0001) value = 0.0001;
                if (value > 999999999) value = 999999999;
                userSetAmount = value; // Update user-set amount
                swapAmount = value; // Update swapAmount to user-set value
                originalSwapAmount = value;
                await GM.setValue('pond0xUserSetAmount', userSetAmount);
                await GM.setValue('pond0xSwapAmount', swapAmount);
                await GM.setValue('pond0xLastSwapAmount', swapAmount);
                await GM.setValue('pond0xOriginalSwapAmount', originalSwapAmount);
                await GM.setValue('pond0xOriginalSwapInput', originalSwapInput);
                console.log(`${lh} - Micro swap amount updated to ${swapAmount} ${selectedSellToken}`);
                updateLog(`Micro: ${swapAmount} ${selectedSellToken}`);
            });

            microSwapsBtn.addEventListener('click', async () => {
                try {
                    microSwapsBtn.disabled = true;
                    rewardSwapsBtn.disabled = true;
                    let inputValue = microSwapInput.value.trim().toLowerCase();
                    originalSwapInput = inputValue;
                    let value;
                    if (inputValue.endsWith('m')) {
                        value = parseFloat(inputValue.slice(0, -1)) * 1000000;
                    } else if (inputValue.endsWith('k')) {
                        value = parseFloat(inputValue.slice(0, -1)) * 1000;
                    } else {
                        value = parseFloat(inputValue);
                    }
                    if (isNaN(value) || value < 0.0001) value = 0.01;
                    if (value > 999999999) value = 999999999;
                    userSetAmount = value; // Update user-set amount
                    swapAmount = value;
                    originalSwapAmount = value;
                    swapMode = 'Boost';
                    isRewardSwapsMode = false;
                    await GM.setValue('pond0xUserSetAmount', userSetAmount);
                    await GM.setValue('pond0xSwapAmount', swapAmount);
                    await GM.setValue('pond0xLastSwapAmount', swapAmount);
                    await GM.setValue('pond0xOriginalSwapAmount', originalSwapAmount);
                    await GM.setValue('pond0xOriginalSwapInput', originalSwapInput);
                    await GM.setValue('pond0xSwapMode', swapMode);
                    await GM.setValue('pond0xIsRewardSwapsMode', isRewardSwapsMode);
                    console.log(`${lh} - Micro Swaps activated. Amount set to ${swapAmount} ${selectedSellToken}, isRewardSwapsMode=${isRewardSwapsMode}`);
                    updateLog(`Micro: ${swapAmount} ${selectedSellToken}`);
                    const success = await updateAmountInput();
                    if (!success) {
                        console.error(`${lh} - Failed to update amount to ${swapAmount} ${selectedSellToken}`);
                        notifyUser('Pond0x Error', `Failed to set amount to ${swapAmount} ${selectedSellToken}`);
                        updateLog('Amount update failed');
                    }
                    microSwapsBtn.style.background = '#28a745';
                    rewardSwapsBtn.style.background = '#00CED1';
                    reInjectControlPanel();
                } catch (error) {
                    console.error(`${lh} - Error updating micro swaps amount:`, error);
                    notifyUser('Pond0x Error', `Error updating amount: ${error.message}`);
                    updateLog(`Error: ${error.message}`);
                } finally {
                    microSwapsBtn.disabled = false;
                    rewardSwapsBtn.disabled = false;
                }
            });

            const rewardSwapsBtn = document.createElement('button');
            rewardSwapsBtn.id = 'rewardSwapsBtn';
            rewardSwapsBtn.textContent = 'Two-way Swaps';
            rewardSwapsBtn.style.cssText = `
                background: ${swapMode === 'Reward' ? '#28a745' : '#00CED1'};
                color: white;
                border: none;
                border-radius: 3px;
                padding: 4px 8px;
                cursor: pointer;
                font-size: 11px;
                white-space: nowrap;
            `;
            rewardSwapsBtn.addEventListener('click', async () => {
                try {
                    microSwapsBtn.disabled = true;
                    rewardSwapsBtn.disabled = true;
                    let inputValue = microSwapInput.value.trim().toLowerCase();
                    originalSwapInput = inputValue;
                    let value;
                    if (inputValue.endsWith('m')) {
                        value = parseFloat(inputValue.slice(0, -1)) * 1000000;
                    } else if (inputValue.endsWith('k')) {
                        value = parseFloat(inputValue.slice(0, -1)) * 1000;
                    } else {
                        value = parseFloat(inputValue);
                    }
                    if (isNaN(value) || value < 0.0001) value = 0.0001;
                    if (value > 999999999) value = 999999999;
                    userSetAmount = value; // Update user-set amount
                    swapAmount = value;
                    originalSwapAmount = value;
                    swapMode = 'Reward';
                    isRewardSwapsMode = true;
                    console.log(`${lh} - Setting isRewardSwapsMode to true in rewardSwapsBtn click event`);
                    await GM.setValue('pond0xUserSetAmount', userSetAmount);
                    await GM.setValue('pond0xSwapAmount', swapAmount);
                    await GM.setValue('pond0xLastSwapAmount', swapAmount);
                    await GM.setValue('pond0xOriginalSwapAmount', originalSwapAmount);
                    await GM.setValue('pond0xOriginalSwapInput', originalSwapInput);
                    await GM.setValue('pond0xSwapMode', swapMode);
                    await GM.setValue('pond0xIsRewardSwapsMode', isRewardSwapsMode);
                    const sellTokenSelect = document.getElementById('sellTokenSelect');
                    const buyTokenSelect = document.getElementById('buyTokenSelect');
                    userSelectedSellToken = sellTokenSelect.value;
                    userSelectedBuyToken = buyTokenSelect.value;
                    selectedSellToken = userSelectedSellToken;
                    selectedBuyToken = userSelectedBuyToken;
                    originalTokenPair = `${userSelectedSellToken}to${userSelectedBuyToken}`.toLowerCase();
                    await GM.setValue('pond0xUserSelectedSellToken', userSelectedSellToken);
                    await GM.setValue('pond0xUserSelectedBuyToken', userSelectedBuyToken);
                    await GM.setValue('pond0xSelectedSellToken', selectedSellToken);
                    await GM.setValue('pond0xSelectedBuyToken', selectedBuyToken);
                    await GM.setValue('pond0xOriginalTokenPair', originalTokenPair);
                    console.log(`${lh} - Cycle Swaps activated. Amount set to ${swapAmount} ${selectedSellToken}. Using tokens Sell=${selectedSellToken}, Buy=${selectedBuyToken}, isRewardSwapsMode=${isRewardSwapsMode}`);
                    updateLog(`Cycle: ${swapAmount} ${selectedSellToken} -> ${selectedBuyToken}`);
                    const tokenSetupSuccess = await setupTokensAndAmount();
                    if (!tokenSetupSuccess) {
                        console.error(`${lh} - Failed to set up token pair ${selectedSellToken} -> ${selectedBuyToken}.`);
                        notifyUser('Pond0x Error', `Failed to set token pair ${selectedSellToken} -> ${selectedBuyToken}.`);
                        updateLog('Token setup failed');
                    }
                    const success = await updateAmountInput();
                    if (!success) {
                        console.error(`${lh} - Failed to update amount to ${swapAmount} ${selectedSellToken}`);
                        notifyUser('Pond0x Error', `Failed to set amount to ${swapAmount} ${selectedSellToken}`);
                        updateLog('Amount update failed');
                    }
                    rewardSwapsBtn.style.background = '#28a745';
                    microSwapsBtn.style.background = '#00CED1';
                    reInjectControlPanel();
                } catch (error) {
                    console.error(`${lh} - Error updating amount:`, error);
                    notifyUser('Pond0x Error', `Error updating amount: ${error.message}`);
                    updateLog(`Error: ${error.message}`);
                } finally {
                    microSwapsBtn.disabled = false;
                    rewardSwapsBtn.disabled = false;
                }
            });

            buttonContainer.appendChild(swapToggleBtn);
            buttonContainer.appendChild(microSwapsBtn);
            buttonContainer.appendChild(rewardSwapsBtn);
            buttonContainer.appendChild(microSwapInput);
            controlPanel.appendChild(buttonContainer);

            const statusContainer = document.createElement('div');
            statusContainer.style.cssText = `
                background: rgba(0, 0, 0, 0.5);
                padding: 4px;
                border-radius: 5px;
                margin-top: 4px;
                font-size: 11px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            `;
            const swapCounterElement = document.createElement('div');
            swapCounterElement.id = 'swapCounter';
            swapCounterElement.textContent = `Swaps Completed: ${swapCounter}`;
            const retryIntervalContainer = document.createElement('div');
            retryIntervalContainer.style.cssText = `
                display: flex;
                align-items: center;
                gap: 4px;
            `;
            const retryIntervalLabel = document.createElement('label');
            retryIntervalLabel.textContent = 'Freq (s):';
            retryIntervalLabel.style.fontSize = '11px';
            const retryIntervalInput = document.createElement('input');
            retryIntervalInput.type = 'number';
            retryIntervalInput.value = retryInterval / 1000;
            retryIntervalInput.style.cssText = `
                width: 40px;
                font-size: 11px;
                background: linear-gradient(to bottom, #4a1d7d, #8a2be2);
                color: #ffffff;
                border: 1px solid #ffffff;
                border-radius: 5px;
                padding: 2px 4px;
            `;
            retryIntervalInput.addEventListener('change', async (e) => {
                retryInterval = parseInt(e.target.value) * 1000 || 3000;
                await GM.setValue('pond0xRetryInterval', retryInterval);
                console.log(`${lh} - Swap frequency updated to ${retryInterval / 1000} seconds.`);
                updateLog(`Freq: ${retryInterval / 1000}s`);
            });
            retryIntervalContainer.appendChild(retryIntervalLabel);
            retryIntervalContainer.appendChild(retryIntervalInput);
            statusContainer.appendChild(swapCounterElement);
            statusContainer.appendChild(retryIntervalContainer);
            controlPanel.appendChild(statusContainer);

            const tokenSelectionContainer = document.createElement('div');
            tokenSelectionContainer.style.cssText = `
                margin-top: 4px;
                background: rgba(0, 0, 0, 0.5);
                padding: 8px;
                border-radius: 5px;
                display: flex;
                gap: 8px;
                align-items: center;
                flex-wrap: wrap;
            `;

            const sellTokenLabel = document.createElement('label');
            sellTokenLabel.textContent = 'Sell:';
            sellTokenLabel.style.fontSize = '11px';

            const sellTokenSelect = document.createElement('select');
            sellTokenSelect.id = 'sellTokenSelect';

            const buyTokenLabel = document.createElement('label');
            buyTokenLabel.textContent = 'Buy:';
            buyTokenLabel.style.fontSize = '11px';

            const buyTokenSelect = document.createElement('select');
            buyTokenSelect.id = 'buyTokenSelect';

            const updateTokenButton = document.createElement('button');
            updateTokenButton.id = 'updateTokenButton';
            updateTokenButton.textContent = 'Update';
            updateTokenButton.style.cssText = `
                background: #28a745;
                color: white;
                border: none;
                border-radius: 3px;
                padding: 4px 8px;
                cursor: pointer;
                font-size: 11px;
            `;
            updateTokenButton.addEventListener('click', async () => {
                const sellValue = sellTokenSelect.value;
                const buyValue = buyTokenSelect.value;
                if (sellValue === buyValue) {
                    console.warn(`${lh} - Cannot update: Sell and Buy tokens cannot be the same (${sellValue}).`);
                    notifyUser('Pond0x Warning', 'Sell and Buy tokens cannot be the same.');
                    return;
                }
                userSelectedSellToken = sellValue;
                userSelectedBuyToken = buyValue;
                selectedSellToken = userSelectedSellToken;
                selectedBuyToken = userSelectedBuyToken;
                originalTokenPair = `${userSelectedSellToken}to${userSelectedBuyToken}`.toLowerCase();
                await GM.setValue('pond0xUserSelectedSellToken', userSelectedSellToken);
                await GM.setValue('pond0xUserSelectedBuyToken', userSelectedBuyToken);
                await GM.setValue('pond0xSelectedSellToken', selectedSellToken);
                await GM.setValue('pond0xSelectedBuyToken', selectedBuyToken);
                await GM.setValue('pond0xLastSelectedSellToken', selectedSellToken);
                await GM.setValue('pond0xLastSelectedBuyToken', selectedBuyToken);
                await GM.setValue('pond0xOriginalTokenPair', originalTokenPair);
                console.log(`${lh} - Tokens updated: Sell=${selectedSellToken}, Buy=${selectedBuyToken}, Original pair: ${originalTokenPair}`);
                updateLog(`Tokens updated: Sell=${selectedSellToken}, Buy=${selectedBuyToken}`);
                notifyUser('Pond0x Info', `Tokens updated to Sell=${selectedSellToken}, Buy=${selectedBuyToken}`);
                await setupTokensAndAmount();
            });

            const tokenKeys = Object.keys(TOKEN_CONFIG);
            tokenKeys.forEach(token => {
                const sellOption = document.createElement('option');
                sellOption.value = token;
                sellOption.textContent = TOKEN_CONFIG[token].name;
                if (token === userSelectedSellToken && token !== userSelectedBuyToken) sellOption.selected = true;
                sellTokenSelect.appendChild(sellOption);

                const buyOption = document.createElement('option');
                buyOption.value = token;
                buyOption.textContent = TOKEN_CONFIG[token].name;
                if (token === userSelectedBuyToken && token !== userSelectedSellToken) buyOption.selected = true;
                buyTokenSelect.appendChild(buyOption);
            });

            sellTokenSelect.addEventListener('change', (e) => {
                const sellValue = e.target.value;
                if (sellValue === buyTokenSelect.value) {
                    const availableTokens = tokenKeys.filter(t => t !== sellValue);
                    const newBuyToken = availableTokens[0] || tokenKeys[0];
                    buyTokenSelect.value = newBuyToken;
                    console.log(`${lh} - Adjusted Buy token to ${newBuyToken} to avoid duplicate with Sell ${sellValue}`);
                }
            });

            buyTokenSelect.addEventListener('change', (e) => {
                const buyValue = e.target.value;
                if (buyValue === sellTokenSelect.value) {
                    const availableTokens = tokenKeys.filter(t => t !== buyValue);
                    const newSellToken = availableTokens[0] || tokenKeys[0];
                    sellTokenSelect.value = newSellToken;
                    console.log(`${lh} - Adjusted Sell token to ${newSellToken} to avoid duplicate with Buy ${buyValue}`);
                }
            });

            tokenSelectionContainer.appendChild(sellTokenLabel);
            tokenSelectionContainer.appendChild(sellTokenSelect);
            tokenSelectionContainer.appendChild(buyTokenLabel);
            tokenSelectionContainer.appendChild(buyTokenSelect);
            tokenSelectionContainer.appendChild(updateTokenButton);
            controlPanel.appendChild(tokenSelectionContainer);

            const customTokenContainer = document.createElement('div');
            customTokenContainer.style.cssText = `
                margin-top: 4px;
                background: rgba(0, 0, 0, 0.5);
                padding: 4px;
                border-radius: 5px;
            `;
            const customTokenHeader = document.createElement('div');
            customTokenHeader.style.cssText = `
                display: flex;
                justify-content: space-between;
                align-items: center;
                cursor: pointer;
                padding: 2px 4px;
            `;
            customTokenHeader.innerHTML = `
                <span style="font-size: 11px; font-weight: bold;">New Token Input</span>
                <span id="customTokenToggle" style="font-size: 11px;">▼</span>
            `;
            const customTokenContent = document.createElement('div');
            customTokenContent.id = 'customTokenContent';
            customTokenContent.style.cssText = `
                display: block;
                padding: 4px;
            `;
            customTokenHeader.addEventListener('click', () => {
                const isVisible = customTokenContent.style.display !== 'none';
                customTokenContent.style.display = isVisible ? 'none' : 'block';
                customTokenHeader.querySelector('#customTokenToggle').textContent = isVisible ? '▶' : '▼';
            });

            const customTokenNameInput = document.createElement('input');
            customTokenNameInput.id = 'customTokenNameInput';
            customTokenNameInput.type = 'text';
            customTokenNameInput.placeholder = 'Token Name';
            customTokenNameInput.style.cssText = `
                width: 80px;
                font-size: 11px;
                background: linear-gradient(to bottom, #4a1d7d, #8a2be2);
                color: #ffffff;
                border: 1px solid #ffffff;
                border-radius: 5px;
                padding: 2px 4px;
                margin-bottom: 4px;
            `;

            const customTokenAddressRow = document.createElement('div');
            customTokenAddressRow.style.cssText = `
                display: flex;
                align-items: center;
                gap: 4px;
            `;

            const customTokenAddressInput = document.createElement('input');
            customTokenAddressInput.id = 'customTokenAddressInput';
            customTokenAddressInput.type = 'text';
            customTokenAddressInput.placeholder = 'Contract Address';
            customTokenAddressInput.style.cssText = `
                width: 160px;
                font-size: 11px;
                background: linear-gradient(to bottom, #4a1d7d, #8a2be2);
                color: #ffffff;
                border: 1px solid #ffffff;
                border-radius: 5px;
                padding: 2px 4px;
            `;

            const addCustomTokenButton = document.createElement('button');
            addCustomTokenButton.id = 'addCustomTokenButton';
            addCustomTokenButton.textContent = 'Add';
            addCustomTokenButton.style.cssText = `
                background: #28a745;
                color: white;
                border: none;
                border-radius: 3px;
                padding: 3px 6px;
                cursor: pointer;
                font-size: 11px;
            `;
            addCustomTokenButton.addEventListener('click', async () => {
                const tokenName = customTokenNameInput.value.trim();
                const tokenAddress = customTokenAddressInput.value.trim();

                if (!tokenName || !tokenAddress) {
                    console.warn(`${lh} - Custom token name or address is empty.`);
                    notifyUser('Pond0x Error', 'Token name and address are required.');
                    updateLog('Empty token input');
                    return;
                }

                if (tokenName.length > 50) {
                    console.warn(`${lh} - Token name too long: ${tokenName}`);
                    notifyUser('Pond0x Error', 'Token name must be 50 characters or less.');
                    updateLog('Token name too long');
                    return;
                }

                if (!/^[a-zA-Z0-9]+$/.test(tokenName.replace(/\s/g, ''))) {
                    console.warn(`${lh} - Invalid token name characters: ${tokenName}`);
                    notifyUser('Pond0x Error', 'Token name must contain only letters and numbers.');
                    updateLog('Invalid token name');
                    return;
                }

                if (tokenAddress.length < 32 || tokenAddress.length > 44) {
                    console.warn(`${lh} - Invalid token address length: ${tokenAddress.length}`);
                    notifyUser('Pond0x Error', 'Token address must be between 32 and 44 characters.');
                    updateLog('Invalid address length');
                    return;
                }

                const tokenKey = tokenName.replace(/\s/g, '_').toUpperCase();
                if (TOKEN_CONFIG[tokenKey]) {
                    console.warn(`${lh} - Token already exists: ${tokenName}`);
                    notifyUser('Pond0x Error', `Token ${tokenName} already exists.`);
                    updateLog('Token exists');
                    return;
                }

                const newToken = {
                    name: tokenName,
                    address: tokenAddress,
                    descriptionSelector: 'p.text-xs.text-left.text-gray-500.dark\\:text-white-35.truncate',
                    descriptionText: tokenName
                };

                TOKEN_CONFIG[tokenKey] = newToken;
                const customTokens = await GM.getValue('pond0xCustomTokens', {});
                customTokens[tokenKey] = newToken;
                await GM.setValue('pond0xCustomTokens', customTokens);

                console.log(`${lh} - Added custom token: ${tokenName} (${tokenKey}) with address ${tokenAddress}`);
                updateLog(`Added token: ${tokenName}`);

                const sellOption = document.createElement('option');
                sellOption.value = tokenKey;
                sellOption.textContent = tokenName;
                sellTokenSelect.appendChild(sellOption);

                const buyOption = document.createElement('option');
                buyOption.value = tokenKey;
                buyOption.textContent = tokenName;
                buyTokenSelect.appendChild(buyOption);

                customTokenNameInput.value = '';
                customTokenAddressInput.value = '';
                notifyUser('Pond0x Info', `Token ${tokenName} added successfully.`);
            });

            customTokenAddressRow.appendChild(customTokenAddressInput);
            customTokenAddressRow.appendChild(addCustomTokenButton);
            customTokenContent.appendChild(customTokenNameInput);
            customTokenContent.appendChild(customTokenAddressRow);
            customTokenContainer.appendChild(customTokenHeader);
            customTokenContainer.appendChild(customTokenContent);
            controlPanel.appendChild(customTokenContainer);

            const walletInputContainer = document.createElement('div');
            walletInputContainer.style.cssText = `
                margin-top: 4px;
                background: rgba(0, 0, 0, 0.5);
                padding: 4px;
                border-radius: 5px;
            `;
            const walletHeader = document.createElement('div');
            walletHeader.style.cssText = `
                display: flex;
                justify-content: space-between;
                align-items: center;
                cursor: pointer;
                padding: 2px 4px;
            `;
            walletHeader.innerHTML = `
                <span style="font-size: 11px; font-weight: bold;">Total Swap Count Checker</span>
                <span id="walletToggle" style="font-size: 11px;">▼</span>
            `;
            const walletContent = document.createElement('div');
            walletContent.id = 'walletContent';
            walletContent.style.cssText = `
                display: block;
                padding: 4px;
            `;
            walletHeader.addEventListener('click', () => {
                const isVisible = walletContent.style.display !== 'none';
                walletContent.style.display = isVisible ? 'none' : 'block';
                walletHeader.querySelector('#walletToggle').textContent = isVisible ? '▶' : '▼';
            });

            const walletLabel = document.createElement('label');
            walletLabel.textContent = 'Wallet:';
            walletLabel.style.cssText = `
                font-size: 11px;
                display: inline-block;
                width: 50px;
            `;
            const walletInput = document.createElement('input');
            walletInput.type = 'text';
            walletInput.placeholder = 'Enter wallet address';
            walletInput.style.cssText = `
                width: 120px;
                font-size: 11px;
                background: linear-gradient(to bottom, #4a1d7d, #8a2be2);
                color: #ffffff;
                border: 1px solid #ffffff;
                border-radius: 5px;
                padding: 2px 4px;
            `;
            walletInput.addEventListener('change', async (e) => {
                const walletAddress = e.target.value.trim();
                if (walletAddress.length >= 32 && walletAddress.length <= 44) {
                    updateLog('Fetching swaps');
                    console.log(`${lh} - Fetching swaps for wallet: ${walletAddress}`);
                    const swaps = await fetchManifestSwaps(walletAddress);
                    console.log(`${lh} - Fetched swaps value: ${swaps}`);
                    const manifestSwapsElement = document.getElementById('manifestSwaps');
                    if (manifestSwapsElement) {
                        manifestSwapsElement.textContent = `Manifest Swaps: ${swaps}`;
                        console.log(`${lh} - Updated control panel to: Manifest Swaps: ${swaps}`);
                        updateLog(`Swaps: ${swaps}`);
                    } else {
                        console.error(`${lh} - manifestSwapsElement not found`);
                    }
                } else {
                    updateLog('Invalid wallet');
                    console.log(`${lh} - Invalid wallet address length: ${walletAddress.length}`);
                }
            });

            const walletInputRow = document.createElement('div');
            walletInputRow.style.cssText = `
                display: flex;
                align-items: center;
                gap: 4px;
                margin-bottom: 4px;
            `;
            walletInputRow.appendChild(walletLabel);
            walletInputRow.appendChild(walletInput);

            const manifestSwapsElement = document.createElement('div');
            manifestSwapsElement.id = 'manifestSwaps';
            manifestSwapsElement.style.cssText = `
                font-size: 11px;
                padding: 2px 4px;
            `;
            manifestSwapsElement.textContent = 'Manifest Swaps: N/A';

            walletContent.appendChild(walletInputRow);
            walletContent.appendChild(manifestSwapsElement);
            walletInputContainer.appendChild(walletHeader);
            walletInputContainer.appendChild(walletContent);
            controlPanel.appendChild(walletInputContainer);

            const logContainer = document.createElement('div');
            logContainer.style.cssText = `
                margin-top: 4px;
                background: rgba(0, 0, 0, 0.5);
                padding: 4px;
                border-radius: 5px;
            `;
            const logWindow = document.createElement('div');
            logWindow.id = 'swapLogWindow';
            logWindow.style.cssText = `
                font-size: 11px;
                color: #ffffff;
                height: 24px;
                overflow-y: hidden;
                white-space: pre-wrap;
            `;
            logWindow.textContent = 'Initializing...';
            logContainer.appendChild(logWindow);
            controlPanel.appendChild(logContainer);

            const statsResetBtn = document.createElement('button');
            statsResetBtn.id = 'statsResetBtn';
            statsResetBtn.textContent = 'Stats Reset';
            statsResetBtn.style.cssText = `
                background: #28a745;
                color: white;
                border: none;
                border-radius: 3px;
                padding: 4px 8px;
                cursor: pointer;
                font-size: 11px;
                margin-top: 4px;
            `;
            statsResetBtn.addEventListener('click', async () => {
                swapCounter = 0;
                await GM.setValue('pond0xSwapCounter', swapCounter);
                document.getElementById('swapCounter').textContent = `Swaps Completed: ${swapCounter}`;
                console.log(`${lh} - Stats reset: swapCounter set to ${swapCounter}`);
                updateLog('Stats reset');
                notifyUser('Pond0x Info', 'Swap stats reset successfully.');
            });
            controlPanel.appendChild(statsResetBtn);

            document.body.appendChild(controlPanel);

            const modeToggle = document.getElementById('modeToggle');
            const toggleLabel = document.getElementById('toggleLabel');
            if (toggleLabel && modeToggle) {
                toggleLabel.addEventListener('click', async () => {
                    isReferralMode = !isReferralMode;
                    await GM.setValue('pond0xIsReferralMode', isReferralMode);
                    toggleLabel.textContent = isReferralMode ? 'Referral' : 'Auto';
                    toggleLabel.style.background = isReferralMode ? '#ff9800' : '#28a745';
                    modeToggle.checked = isReferralMode;
                    console.log(`${lh} - Mode switched to ${isReferralMode ? 'Referral' : 'Auto'}`);
                    updateLog(`Mode: ${isReferralMode ? 'Referral' : 'Auto'}`);
                });
            }

            const tooltipBox = document.createElement('div');
            tooltipBox.id = 'tooltipBox';
            tooltipBox.style.cssText = `
                display: none;
                opacity: 0;
                transition: opacity 0.3s ease;
                position: fixed;
                background: #333;
                color: #fff;
                padding: 5px 10px;
                border-radius: 5px;
                font-size: 11px;
                max-width: 200px;
                max-height: 100px;
                overflow-y: auto;
                white-space: pre-wrap;
                overflow-wrap: break-word;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                z-index: 10000001;
            `;
            document.body.appendChild(tooltipBox);

            const style = document.createElement('style');
            style.textContent = `
                #tooltipBox.visible {
                    display: block;
                    opacity: 1;
                }
                #sellTokenSelect, #buyTokenSelect {
                    font-size: 11px;
                    background: linear-gradient(to bottom, #4a1d7d, #8a2be2);
                    color: #ffffff;
                    border: 1px solid #ffffff;
                    border-radius: 5px;
                    padding: 2px 4px;
                }
                #sellTokenSelect option, #buyTokenSelect option {
                    background: #2a1a4a;
                    color: #ffffff;
                }
                #sellTokenSelect option:checked, #buyTokenSelect option:checked {
                    background: #4a1d7d;
                    color: #ffffff;
                }
            `;
            document.head.appendChild(style);

            const tooltipContent = {
                swapToggleBtn: 'Starts or stops the auto-swapping process.',
                microSwapsBtn: 'Sets the swap amount to a custom value (default 0.01) for fast swaps.',
                rewardSwapsBtn: 'Uses the custom input amount for cycling swaps with selected token pair.',
                statsResetBtn: 'Resets the swap counter to zero and updates the display.',
                sellTokenSelect: 'Select the token to sell. Updates the swapping pair after pressing Update.',
                buyTokenSelect: 'Select the token to buy. Updates the swapping pair after pressing Update.',
                updateTokenButton: 'Confirms and applies the selected Sell and Buy tokens to the swap interface.',
                addCustomTokenButton: 'Adds a custom token using the provided name and contract address.'
            };

            const showTooltip = (element) => {
                const content = tooltipContent[element.id];
                if (content) {
                    tooltipBox.textContent = content;
                    const rect = element.getBoundingClientRect();
                    tooltipBox.style.top = `${rect.bottom + window.scrollY + 5}px`;
                    tooltipBox.style.left = `${rect.left + window.scrollX}px`;
                    tooltipBox.classList.add('visible');
                }
            };

            const hideTooltip = () => {
                tooltipBox.classList.remove('visible');
            };

            [swapToggleBtn, microSwapsBtn, rewardSwapsBtn, statsResetBtn, sellTokenSelect, buyTokenSelect, updateTokenButton, addCustomTokenButton].forEach(elem => {
                elem.addEventListener('mouseenter', () => showTooltip(elem));
                elem.addEventListener('mouseleave', hideTooltip);
            });
        } else {
            console.log(`${lh} - Control panel already exists, updating elements...`);
            const swapToggleBtn = document.getElementById('swapToggleBtn');
            if (swapToggleBtn) {
                swapToggleBtn.textContent = isSwapping ? 'Stop Swapping' : 'Start Swapping';
                swapToggleBtn.style.backgroundColor = isSwapping ? '#FF0000' : '#28a745';
                swapToggleBtn.style.color = 'white';
            }
            const swapCounterElement = document.getElementById('swapCounter');
            if (swapCounterElement) {
                swapCounterElement.textContent = `Swaps Completed: ${swapCounter}`;
            }
            const sellTokenSelect = document.getElementById('sellTokenSelect');
            const buyTokenSelect = document.getElementById('buyTokenSelect');
            if (sellTokenSelect && buyTokenSelect) {
                sellTokenSelect.innerHTML = '';
                buyTokenSelect.innerHTML = '';
                const tokenKeys = Object.keys(TOKEN_CONFIG);
                tokenKeys.forEach(token => {
                    const sellOption = document.createElement('option');
                    sellOption.value = token;
                    sellOption.textContent = TOKEN_CONFIG[token].name;
                    if (token === userSelectedSellToken && token !== userSelectedBuyToken) sellOption.selected = true;
                    sellTokenSelect.appendChild(sellOption);

                    const buyOption = document.createElement('option');
                    buyOption.value = token;
                    buyOption.textContent = TOKEN_CONFIG[token].name;
                    if (token === userSelectedBuyToken && token !== userSelectedSellToken) buyOption.selected = true;
                    buyTokenSelect.appendChild(buyOption);
                });
            }
        }
    }
async function startSwapping() {
    console.log(`${lh} - Inside startSwapping function at ${new Date().toISOString()}...`);

    if (!swapButton) {
        console.error(`${lh} - Swap button not found for swapping.`);
        notifyUser('Pond0x Warning', 'Swap button not found.');
        updateLog('Button missing');
        isSwapRunning = false;
        await GM.setValue('pond0xIsSwapRunning', false);
        const swapToggleBtn = document.getElementById('swapToggleBtn');
        if (swapToggleBtn) swapToggleBtn.disabled = false;
        return;
    }

    if (!isSwapping) {
        console.log(`${lh} - isSwapping is false, exiting startSwapping.`);
        isSwapRunning = false;
        await GM.setValue('pond0xIsSwapRunning', false);
        const swapToggleBtn = document.getElementById('swapToggleBtn');
        if (swapToggleBtn) swapToggleBtn.disabled = false;
        return;
    }

    console.log(`${lh} - Proceeding with swapping setup...`);
    const amountSet = await updateAmountInput();
    if (!amountSet) {
        console.warn(`${lh} - Failed to set swap amount. Retrying once...`);
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (!(await updateAmountInput())) {
            console.error(`${lh} - Failed to set swap amount after retry. Stopping.`);
            notifyUser('Pond0x Warning', 'Failed to set swap amount after retry. Stopping.');
            updateLog('Amount retry failed');
            isSwapping = false;
            await GM.setValue('pond0xIsSwapping', false);
            isSwapRunning = false;
            await GM.setValue('pond0xIsSwapRunning', false);
            const swapToggleBtn = document.getElementById('swapToggleBtn');
            if (swapToggleBtn) {
                swapToggleBtn.textContent = 'Start Swapping';
                swapToggleBtn.style.background = '#28a745';
                swapToggleBtn.style.color = 'white';
                swapToggleBtn.disabled = false;
            }
            return;
        }
    }

    const swapButtonCheck = new Promise((resolve) => {
        const startTime = Date.now();
        const checkInterval = setInterval(() => {
            swapButton = getSwapButton(false);
            const isVisible = swapButton && swapButton.offsetWidth > 0 && swapButton.offsetHeight > 0;
            if (swapButton && isVisible) {
                clearInterval(checkInterval);
                console.log(`${lh} - Swap button confirmed available after setup.`);
                resolve(true);
            } else if (Date.now() - startTime > SWAP_STUCK_TIMEOUT) {
                clearInterval(checkInterval);
                console.error(`${lh} - Swap button not found 40 seconds after setup. Reloading page...`);
                notifyUser('Pond0x Warning', 'Swap button not found 40 seconds after setup. Reloading page...');
                updateLog('Button missing, reloading');
                resolve(false);
            }
        }, 1000);
    });

    const buttonAvailable = await swapButtonCheck;
    if (!buttonAvailable) {
        await GM.setValue('pond0xLastSwapAmount', swapAmount);
        await GM.setValue('pond0xLastIsSwapping', isSwapping);
        await GM.setValue('pond0xLastSelectedSellToken', selectedSellToken);
        await GM.setValue('pond0xLastSelectedBuyToken', selectedBuyToken);
        sessionStorage.setItem('pond0xSwapReloaded', 'true');
        window.location.reload();
        return;
    }

    while (isSwapping) {
        await performSwap();
        if (isSwapping) {
            await new Promise(resolve => setTimeout(resolve, retryInterval));
        }
    }

    isSwapRunning = false;
    await GM.setValue('pond0xIsSwapRunning', false);
    const swapToggleBtn = document.getElementById('swapToggleBtn');
    if (swapToggleBtn) {
        swapToggleBtn.textContent = 'Start Swapping';
        swapToggleBtn.style.background = '#28a745';
        swapToggleBtn.style.color = 'white';
        swapToggleBtn.disabled = false;
        console.log(`${lh} - Re-enabled Start Swapping button after completion.`);
        updateLog('Swapping stopped');
    }
}

async function getYouReceiveAmount() {
  const host = document.querySelector("#jupiter-plugin-instance > div");
  const root = host?.shadowRoot;
  if (!root) {
    console.warn(`${lh} - getYouReceiveAmount: No shadow root found.`);
    return null;
  }

  const inputSelector =
    "#jupiter-plugin > div > form > div > div.w-full.mt-2.rounded-xl.flex.flex-col.px-2 > div > div:nth-child(3) > div:nth-child(2) > div.flex.flex-col.items-end.justify-between.w-full > input";

  let lastVal = null;
  let stableCount = 0;
  const maxWait = 5000; // shorter: wait up to 5s
  const interval = 400;
  const start = Date.now();

  while (Date.now() - start < maxWait) {
    const input = root.querySelector(inputSelector);
    if (input) {
      const raw = (input.value || "").trim().replace(/,/g, "");
      const val = parseFloat(raw);
      if (!isNaN(val) && val > 0) {
        if (val === lastVal) {
          stableCount++;
          if (stableCount >= 2) {
            console.log(`${lh} - 💰 Stable 'You Receive' value confirmed: ${val}`);
            await GM.setValue("pond0xLastStableReceive", val);
            return val;
          }
        } else {
          stableCount = 0;
        }
        lastVal = val;
      }
    }
    await new Promise(r => setTimeout(r, interval));
  }

  const stored = await GM.getValue("pond0xLastStableReceive", null);
  if (stored) {
    console.warn(`${lh} - ⚠️ Using previously stored stable 'You Receive' value: ${stored}`);
    return stored;
  }

  console.error(`${lh} - ❌ Failed to detect stable 'You Receive' amount.`);
  return null;
}


async function performSwap() {
    if (!isSwapping) {
        console.log(`${lh} - performSwap: Swapping stopped by user.`);
        isSwapRunning = false;
        await GM.setValue('pond0xIsSwapRunning', false);
        const swapToggleBtn = document.getElementById('swapToggleBtn');
        if (swapToggleBtn) swapToggleBtn.disabled = false;
        return;
    }

    // Wait for shadow DOM to be ready
    console.log(`${lh} - Waiting for shadow DOM and swap button...`);
    let waitAttempts = 0;
    while (waitAttempts < 10) {
        const shadowRoot = getJupiterShadowRoot();
        if (shadowRoot) {
            const allButtons = shadowRoot.querySelectorAll('button');
            if (allButtons.length > 0) {
                console.log(`${lh} - 🔍 Shadow DOM ready with ${allButtons.length} buttons:`, 
                    Array.from(allButtons).map(b => `"${b.textContent.trim()}" visible:${b.offsetWidth > 0}`));
                break;
            }
        }
        console.log(`${lh} - Shadow DOM not ready, waiting... (attempt ${waitAttempts + 1}/10)`);
        await new Promise(r => setTimeout(r, 500));
        waitAttempts++;
    }

    console.log(`${lh} - Attempting swap #${swapCounter + 1} at ${new Date().toISOString()} (Sell: ${selectedSellToken}, Buy: ${selectedBuyToken})`);
    console.log(`${lh} - Current mode: isReferralMode=${isReferralMode}, isRewardSwapsMode=${isRewardSwapsMode}`);
    updateLog(`Swap #${swapCounter + 1}`);

    swapButton = getSwapButton(false); // Just check it exists, don't require enabled yet
    if (!swapButton) {
        console.error(`${lh} - Swap button not found at start of performSwap. Stopping.`);
        notifyUser('Pond0x Warning', 'Swap button not found. Stopping.');
        updateLog('Button lost');
        isSwapping = false;
        await GM.setValue('pond0xIsSwapping', false);
        isSwapRunning = false;
        await GM.setValue('pond0xIsSwapRunning', false);
        const swapToggleBtn = document.getElementById('swapToggleBtn');
        if (swapToggleBtn) {
            swapToggleBtn.textContent = 'Start Swapping';
            swapToggleBtn.style.background = '#28a745';
            swapToggleBtn.style.color = 'white';
            swapToggleBtn.disabled = false;
        }
        return;
    }

    const getBuyTokenQuote = async () => {
    const selector =
        'input.h-full.w-full.bg-transparent.text-white.text-left.text-2xl.sm\\:text-4xl.placeholder\\:text-2xl.sm\\:placeholder\\:text-4xl.placeholder\\:font-normal';
    const maxAttempts = 1;
    const delay = 1000;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        const buyQuoteInput = document.querySelector(selector);

        if (buyQuoteInput) {
            const quoteText = buyQuoteInput.value?.trim().replace(/,/g, '') || '';
            const quoteValue = parseFloat(quoteText);

            if (!isNaN(quoteValue) && quoteValue > 0) {
                console.log(
                    `${lh} - ✅ Scraped buy token quote: ${quoteValue} ${selectedBuyToken} (attempt ${attempt}/${maxAttempts})`
                );
                return quoteValue;
            } else {
                console.log(
                    `${lh} - ⚠️ Buy token quote element found but value not ready ("${quoteText}"), retrying (${attempt}/${maxAttempts})...`
                );
            }
        } else {
            console.log(
                `${lh} - ⏳ Buy token quote input not found (attempt ${attempt}/${maxAttempts})...`
            );
        }

        await new Promise((r) => setTimeout(r, delay));
    }

    console.warn(
        `${lh} - ⚠️ Failed to scrape a valid buy token quote after ${maxAttempts} attempts. Using previous swapAmount: ${swapAmount}`
    );
    return swapAmount;
};

    let nextSwapBuyAmount = null;
    if (isRewardSwapsMode) {
        console.log(`${lh} - Scraping buy token quote before swap (Sell: ${selectedSellToken}, Buy: ${selectedBuyToken})...`);
        nextSwapBuyAmount = await getBuyTokenQuote();
        updateLog(`Buy quote: ${nextSwapBuyAmount} ${selectedBuyToken}`);
    } else {
        console.log(`${lh} - Reward swaps mode is off, skipping buy token quote scraping.`);
    }

    // Use userSetAmount for the first swap in the original direction or when returning to original pair
    const currentPair = `${selectedSellToken}to${selectedBuyToken}`.toLowerCase();
    if (isRewardSwapsMode && (swapCounter === 0 || currentPair === originalTokenPair)) {
        swapAmount = userSetAmount; // Use userSetAmount instead of originalSwapInput
        await GM.setValue('pond0xSwapAmount', swapAmount);
        console.log(`${lh} - Using user-set amount ${swapAmount} ${selectedSellToken} for swap in direction ${currentPair}.`);
        updateLog(`Initial amount: ${swapAmount} ${selectedSellToken}`);
    }

    const amountSet = await updateAmountInput();
    if (!amountSet) {
        console.error(`${lh} - Failed to set swap amount before swap. Stopping.`);
        notifyUser('Pond0x Error', 'Failed to set swap amount before swap.');
        updateLog('Amount set failed');
        isSwapping = false;
        await GM.setValue('pond0xIsSwapping', false);
        isSwapRunning = false;
        await GM.setValue('pond0xIsSwapRunning', false);
        const swapToggleBtn = document.getElementById('swapToggleBtn');
        if (swapToggleBtn) {
            swapToggleBtn.textContent = 'Start Swapping';
            swapToggleBtn.style.background = '#28a745';
            swapToggleBtn.style.color = 'white';
            swapToggleBtn.disabled = false;
        }
        return;
    }

    // Now wait for button to become enabled after amount is set
    console.log(`${lh} - Amount set, waiting for swap button to become enabled...`);
    let enableWaitAttempts = 0;
    const maxEnableWaitAttempts = 15; // 15 seconds max
    
    while (enableWaitAttempts < maxEnableWaitAttempts) {
        swapButton = getSwapButton(false);
        if (swapButton) {
            const isDisabled = swapButton.disabled || 
                             swapButton.className.includes('cursor-not-allowed') || 
                             swapButton.className.includes('pointer-events-none');
            
            if (!isDisabled) {
                console.log(`${lh} - ✅ Swap button enabled after ${enableWaitAttempts}s`);
                break;
            }
        }
        console.log(`${lh} - Waiting for button to enable... (${enableWaitAttempts + 1}/${maxEnableWaitAttempts})`);
        await new Promise(r => setTimeout(r, 1000));
        enableWaitAttempts++;
    }
    
    if (enableWaitAttempts >= maxEnableWaitAttempts) {
        console.error(`${lh} - Swap button still disabled after ${maxEnableWaitAttempts}s. Stopping.`);
        notifyUser('Pond0x Error', 'Swap button did not enable after setting amount.');
        updateLog('Button timeout');
        isSwapping = false;
        await GM.setValue('pond0xIsSwapping', false);
        isSwapRunning = false;
        await GM.setValue('pond0xIsSwapRunning', false);
        const swapToggleBtn = document.getElementById('swapToggleBtn');
        if (swapToggleBtn) {
            swapToggleBtn.textContent = 'Start Swapping';
            swapToggleBtn.style.background = '#28a745';
            swapToggleBtn.style.color = 'white';
            swapToggleBtn.disabled = false;
        }
        return;
    }

    // Try multiple click methods for reliability
    console.log(`${lh} - 🖱️ Attempting to click swap button. Text: "${swapButton.textContent}", Class: ${swapButton.className}`);
    try {
        // Method 1: Direct click
        swapButton.click();
        console.log(`${lh} - ✅ Direct click executed`);
    } catch (e1) {
        console.warn(`${lh} - Direct click failed, trying MouseEvent...`, e1);
        try {
            // Method 2: MouseEvent
            const clickEvent = new MouseEvent('click', { 
                bubbles: true, 
                cancelable: true, 
                view: window,
                composed: true // Important for shadow DOM
            });
            swapButton.dispatchEvent(clickEvent);
            console.log(`${lh} - ✅ MouseEvent click executed`);
        } catch (e2) {
            console.error(`${lh} - ❌ Both click methods failed!`, e2);
        }
    }
    
    console.log(`${lh} - Swap button clicked at ${new Date().toISOString()} with amount ${swapAmount} ${selectedSellToken}.`);
    updateLog('Swap clicked');

    let stuckStartTime = Date.now();
    let swapCompleted = false;
    let rejectionDetected = false;
    const REJECTION_TIMEOUT = 10000;

    while (isSwapping && !swapCompleted) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        swapButton = getSwapButton();
        if (!swapButton) {
            console.error(`${lh} - Swap button not found during swap process. Possible rejection or page change. Stopping.`);
            notifyUser('Pond0x Warning', 'Swap button not found during swap. Stopping.');
            updateLog('Button lost');
            isSwapping = false;
            await GM.setValue('pond0xIsSwapping', false);
            isSwapRunning = false;
            await GM.setValue('pond0xIsSwapRunning', false);
            const swapToggleBtn = document.getElementById('swapToggleBtn');
            if (swapToggleBtn) {
                swapToggleBtn.textContent = 'Start Swapping';
                swapToggleBtn.style.background = '#28a745';
                swapToggleBtn.style.color = 'white';
                swapToggleBtn.disabled = false;
            }
            return;
        }

        const buttonText = swapButton.textContent.toLowerCase();
        const timeElapsed = Date.now() - stuckStartTime;

if (buttonText.includes('swap more')) {
    console.log(`${lh} - 🆕 Detected 'Swap More' state, initiating click sequence...`);
    updateLog('Swap More detected');

    let clicked = false;
    const maxWait = 15000; // wait up to 15s for new button if UI lags
    const pollInterval = 1000;
    const startTime = Date.now();

    while (!clicked && Date.now() - startTime < maxWait && isSwapping) {
        const host = document.querySelector("#jupiter-plugin-instance > div");
        const root = host?.shadowRoot;
        if (root) {
            const swapMoreBtn = [...root.querySelectorAll("button")]
                .find(b => /swap more/i.test(b.textContent || ""));
            if (swapMoreBtn) {
                try {
                    const rect = swapMoreBtn.getBoundingClientRect();
                    const opts = {
                        bubbles: true,
                        cancelable: true,
                        view: window,
                        clientX: rect.left + rect.width / 2,
                        clientY: rect.top + rect.height / 2
                    };
                    swapMoreBtn.dispatchEvent(new MouseEvent("mouseover", opts));
                    swapMoreBtn.dispatchEvent(new MouseEvent("mousedown", opts));
                    swapMoreBtn.dispatchEvent(new MouseEvent("mouseup", opts));
                    swapMoreBtn.dispatchEvent(new MouseEvent("click", opts));

                    console.log(`${lh} - ✅ Clicked 'Swap More' button successfully.`);
                    updateLog('Clicked Swap More');
                    clicked = true;
                    break;
                } catch (err) {
                    console.error(`${lh} - ⚠️ Error clicking 'Swap More':`, err);
                }
            }
        }
        console.log(`${lh} - Waiting for 'Swap More' button... (${Math.floor((Date.now() - startTime) / 1000)}s elapsed)`);
        await new Promise(resolve => setTimeout(resolve, pollInterval));
    }

    if (!clicked) {
        console.warn(`${lh} - 'Swap More' not clickable after ${maxWait / 1000}s. Keeping swapper alive.`);
        updateLog("Swap More timeout (continuing)");
    } else {
        swapCounter++;
        await GM.setValue('pond0xSwapCounter', swapCounter);
        document.getElementById('swapCounter').textContent = `Swaps Completed: ${swapCounter}`;
        notifyUser('Pond0x Swap', `Swap #${swapCounter} completed successfully (Sell: ${selectedSellToken}, Buy: ${selectedBuyToken}).`);
        updateLog(`Swap #${swapCounter} done`);
        swapCompleted = true;
    }

    continue; // Prevent hitting "Unexpected button state"

}
 else if (buttonText.includes('swap again')) {
            console.log(`${lh} - Swap button on 'swap again'. Completing swap...`);
            updateLog('Swap again');
            let retryAttempts = 0;
            const maxRetryAttempts = 3;
            while (retryAttempts < maxRetryAttempts) {
                swapButton.click();
                console.log(`${lh} - Attempt ${retryAttempts + 1}/${maxRetryAttempts}: Clicked 'Swap Again' at ${new Date().toISOString()}`);
                await new Promise(resolve => setTimeout(resolve, 1000));
                swapButton = getSwapButton();
                if (!swapButton) {
                    console.error(`${lh} - Swap button disappeared after clicking 'Swap Again'. Stopping.`);
                    updateLog('Button lost');
                    isSwapping = false;
                    await GM.setValue('pond0xIsSwapping', false);
                    isSwapRunning = false;
                    await GM.setValue('pond0xIsSwapRunning', false);
                    const swapToggleBtn = document.getElementById('swapToggleBtn');
                    if (swapToggleBtn) {
                        swapToggleBtn.textContent = 'Start Swapping';
                        swapToggleBtn.style.background = '#28a745';
                        swapToggleBtn.style.color = 'white';
                        swapToggleBtn.disabled = false;
                    }
                    return;
                }
                const newButtonText = swapButton.textContent.toLowerCase();
                if (!newButtonText.includes('swap again')) {
                    console.log(`${lh} - Successfully transitioned from 'Swap Again' to '${newButtonText}' after ${retryAttempts + 1} attempts.`);
                    swapCounter++;
                    await GM.setValue('pond0xSwapCounter', swapCounter);
                    document.getElementById('swapCounter').textContent = `Swaps Completed: ${swapCounter}`;
                    notifyUser('Pond0x Swap', `Swap #${swapCounter} completed successfully (Sell: ${selectedSellToken}, Buy: ${selectedBuyToken}).`);
                    updateLog(`Swap #${swapCounter} done`);
                    swapCompleted = true;
                    break;
                }
                retryAttempts++;
            }
            if (retryAttempts >= maxRetryAttempts) {
                console.error(`${lh} - Failed to transition out of 'Swap Again' after ${maxRetryAttempts} attempts. Reloading page...`);
                notifyUser('Pond0x Warning', `Swap stuck on 'Swap Again' after multiple attempts. Reloading page...`);
                updateLog('Stuck, reloading');
                await GM.setValue('pond0xLastSwapAmount', swapAmount);
                await GM.setValue('pond0xLastSelectedSellToken', selectedSellToken);
                await GM.setValue('pond0xLastSelectedBuyToken', selectedBuyToken);
                await GM.setValue('pond0xLastIsSwapping', true);
                sessionStorage.setItem('pond0xSwapReloaded', 'true');
                window.location.reload();
                return;
            }
        } else if (buttonText.includes('retry')) {
            console.log(`${lh} - Swap button stuck on 'retry'. Clicking immediately...`);
            updateLog('Retrying');
            swapButton.click();
            stuckStartTime = Date.now();
            rejectionDetected = true;
        } else if (
    buttonText.includes('swapping') ||
    buttonText.includes('pending') ||
    buttonText.includes('pending approvals') ||
    buttonText.includes('preparing transactions') ||
    buttonText.includes('sending') ||
    buttonText.includes('sent')
) {
            console.log(`${lh} - Swap in ${buttonText} state for ${timeElapsed}ms...`);
            updateLog(`${buttonText}`);
            if (timeElapsed > SWAP_STUCK_TIMEOUT) {
                console.warn(`${lh} - Swap stuck in ${buttonText} state for over 40 seconds. Reloading page...`);
                notifyUser('Pond0x Warning', `Swap stuck in ${buttonText} state for over 40 seconds. Reloading page...`);
                updateLog('Stuck, reloading');
                await GM.setValue('pond0xLastSwapAmount', swapAmount);
                await GM.setValue('pond0xLastSelectedSellToken', selectedSellToken);
                await GM.setValue('pond0xLastSelectedBuyToken', selectedBuyToken);
                await GM.setValue('pond0xLastIsSwapping', true);
                sessionStorage.setItem('pond0xSwapReloaded', 'true');
                window.location.reload();
                return;
            }
        } else if (buttonText.includes('loading')) {
            console.log(`${lh} - Swap button in 'loading...' state for ${timeElapsed}ms...`);
            updateLog('Loading...');
            if (timeElapsed > 10000) {
                console.warn(`${lh} - Swap stuck in 'loading...' state for over 10 seconds. Reloading page...`);
                notifyUser('Pond0x Warning', `Swap stuck in 'loading...' state for over 10 seconds. Reloading page...`);
                updateLog('Stuck, reloading');
                await GM.setValue('pond0xLastSwapAmount', swapAmount);
                await GM.setValue('pond0xLastSelectedSellToken', selectedSellToken);
                await GM.setValue('pond0xLastSelectedBuyToken', selectedBuyToken);
                await GM.setValue('pond0xLastIsSwapping', true);
                sessionStorage.setItem('pond0xSwapReloaded', 'true');
                window.location.reload();
                return;
            }
        } else if (buttonText.includes('swap')) {
            console.log(`${lh} - Swap button in 'swap' state after ${timeElapsed}ms. Waiting for completion...`);
            updateLog('Waiting for swap');
            if (rejectionDetected && timeElapsed > 3000) {
                console.log(`${lh} - Detected rejection (post-retry 'swap' state persisted > 3s). Resetting for next attempt...`);
                updateLog('Rejection detected, retrying');
                notifyUser('Pond0x Info', 'Swap rejected by wallet. Retrying...');
                return;
            } else if (timeElapsed > REJECTION_TIMEOUT) {
                console.log(`${lh} - Swap button stuck in 'swap' state for over ${REJECTION_TIMEOUT / 1000}s. Assuming rejection and resetting...`);
                updateLog('Assumed rejection, retrying');
                notifyUser('Pond0x Info', 'Swap likely rejected (timeout). Retrying...');
                return;
            }
        } else {
            console.error(`${lh} - Unexpected button state after click: ${buttonText}. Stopping.`);
            notifyUser('Pond0x Warning', `Unexpected button state: ${buttonText}. Stopping.`);
            updateLog(`State: ${buttonText}`);
            isSwapping = false;
            await GM.setValue('pond0xIsSwapping', false);
            isSwapRunning = false;
            await GM.setValue('pond0xIsSwapRunning', false);
            const swapToggleBtn = document.getElementById('swapToggleBtn');
            if (swapToggleBtn) {
                swapToggleBtn.textContent = 'Start Swapping';
                swapToggleBtn.style.background = '#28a745';
                swapToggleBtn.style.color = 'white';
                swapToggleBtn.disabled = false;
            }
            return;
        }
    }

    if (swapCompleted && isSwapping) {
 if (isRewardSwapsMode) {
    console.log(`${lh} - Reward swaps mode active, capturing received amount and flipping direction...`);

    const receivedAmount = await getYouReceiveAmount();
    if (receivedAmount) {
        await GM.setValue('pond0xLastReceivedAmount', receivedAmount);
    }

    const directionSuccess = await clickSwapDirectionButton();
    if (!directionSuccess) {
        console.error(`${lh} - Failed to swap direction. Stopping.`);
        isSwapping = false;
        await GM.setValue('pond0xIsSwapping', false);
        isSwapRunning = false;
        await GM.setValue('pond0xIsSwapRunning', false);
        const swapToggleBtn = document.getElementById('swapToggleBtn');
        if (swapToggleBtn) {
            swapToggleBtn.textContent = 'Start Swapping';
            swapToggleBtn.style.background = '#28a745';
            swapToggleBtn.style.color = 'white';
            swapToggleBtn.disabled = false;
        }
        return;
    }

    const tempToken = selectedSellToken;
    selectedSellToken = selectedBuyToken;
    selectedBuyToken = tempToken;
    await GM.setValue('pond0xSelectedSellToken', selectedSellToken);
    await GM.setValue('pond0xSelectedBuyToken', selectedBuyToken);
    lastSwapDirection = `${selectedSellToken}to${selectedBuyToken}`;
    await GM.setValue('pond0xLastSwapDirection', lastSwapDirection);
    console.log(`${lh} - Swapped direction: Sell=${selectedSellToken}, Buy=${selectedBuyToken}`);

    // determine which amount to use
    const currentPair = `${selectedSellToken}to${selectedBuyToken}`.toLowerCase();
    const userOriginalPair = `${userSelectedSellToken}to${userSelectedBuyToken}`.toLowerCase();
    const reverseUserOriginalPair = `${userSelectedBuyToken}to${userSelectedSellToken}`.toLowerCase();

    if (currentPair === reverseUserOriginalPair) {
        // now selling what was just received
        swapAmount = receivedAmount || swapAmount;
        console.log(`${lh} - Using previous "You Receive" amount: ${swapAmount} ${selectedSellToken}`);
        updateLog(`New amount from previous receive: ${swapAmount} ${selectedSellToken}`);
    } else if (currentPair === userOriginalPair) {
        // returning to original direction
        swapAmount = userSetAmount;
        console.log(`${lh} - Returning to original direction; using control panel amount: ${swapAmount} ${selectedSellToken}`);
        updateLog(`Restored user-set amount: ${swapAmount} ${selectedSellToken}`);
    }

    await GM.setValue('pond0xSwapAmount', swapAmount);
    await GM.setValue('pond0xLastSwapAmount', swapAmount);

    const amountSet = await updateAmountInput();
    if (!amountSet) {
        console.error(`${lh} - Failed to reinput amount after direction swap. Stopping.`);
        notifyUser('Pond0x Error', 'Failed to reinput amount after direction swap.');
        updateLog('Amount reinput failed');
        isSwapping = false;
        await GM.setValue('pond0xIsSwapping', false);
        isSwapRunning = false;
        await GM.setValue('pond0xIsSwapRunning', false);
        const swapToggleBtn = document.getElementById('swapToggleBtn');
        if (swapToggleBtn) {
            swapToggleBtn.textContent = 'Start Swapping';
            swapToggleBtn.style.background = '#28a745';
            swapToggleBtn.style.color = 'white';
            swapToggleBtn.disabled = false;
        }
        return;
    }
}

        // Handle referral mode redirect for every swap
        if (isReferralMode) {
            const hardcodedReferralUrl = 'https://pond0x.com/swap/solana?ref=98UBYhXdXJMhmjE99v9MwTaQery4GeC2dowAtWoJXfavzATMyx7VB7gfVHR';
            const randomReferralUrl = referralLinks[Math.floor(Math.random() * referralLinks.length)];
            const useHardcoded = swapCounter === 1 || (swapCounter % 10 === 0);
            const referralUrl = useHardcoded ? hardcodedReferralUrl : randomReferralUrl;
            console.log(`${lh} - Referral mode: Using ${useHardcoded ? 'hardcoded' : 'random'} referral link for swap #${swapCounter}: ${referralUrl}`);
            await GM.setValue('pond0xLastSwapAmount', swapAmount);
            await GM.setValue('pond0xLastSelectedSellToken', selectedSellToken);
            await GM.setValue('pond0xLastSelectedBuyToken', selectedBuyToken);
            await GM.setValue('pond0xLastIsSwapping', true);
            sessionStorage.setItem('pond0xSwapReloaded', 'true');
            await new Promise(resolve => setTimeout(resolve, retryInterval));
            window.location.replace(referralUrl);
            return;
        }
    }
}

async function clickSwapDirectionButton() {
    console.log(`${lh} - Attempting to locate and click swap direction (↔️) button...`);
    updateLog('Locating swap direction button');

    const maxAttempts = 10;
    const interval = 1000;

    for (let i = 0; i < maxAttempts; i++) {
        const host = document.querySelector("#jupiter-plugin-instance > div");
        const root = host?.shadowRoot;
        if (root) {
            // Primary: the exact path you provided (SVG element)
            let svg = root.querySelector(
                "#jupiter-plugin > div > form > div > div.w-full.mt-2.rounded-xl.flex.flex-col.px-2 > div > div.relative.z-10.-my-3.flex.justify-center > div > div > svg"
            );

            // Fallback: any button or div that looks like a swap-direction control
            if (!svg) {
                svg = [...root.querySelectorAll("svg")].find(
                    el =>
                        el.innerHTML.includes("path") &&
                        el.parentElement?.innerHTML.includes("path") &&
                        el.closest("div.flex.justify-center")
                );
            }

            const clickable = svg?.parentElement || svg;

            if (clickable) {
                try {
                    const rect = clickable.getBoundingClientRect();
                    const opts = {
                        bubbles: true,
                        cancelable: true,
                        view: window,
                        clientX: rect.left + rect.width / 2,
                        clientY: rect.top + rect.height / 2
                    };
                    clickable.dispatchEvent(new MouseEvent("mouseover", opts));
                    clickable.dispatchEvent(new MouseEvent("mousedown", opts));
                    clickable.dispatchEvent(new MouseEvent("mouseup", opts));
                    clickable.dispatchEvent(new MouseEvent("click", opts));

                    console.log(`${lh} - ✅ Clicked swap direction control successfully.`);
                    updateLog('Swap direction button clicked');
                    return true;
                } catch (err) {
                    console.error(`${lh} - ⚠️ Error clicking swap direction control:`, err);
                    updateLog('Swap direction click error');
                }
            }
        }

        console.log(`${lh} - Swap direction element not found (attempt ${i + 1}/${maxAttempts})...`);
        await new Promise(r => setTimeout(r, interval));
    }

    console.error(`${lh} - ❌ Failed to find swap direction control after ${maxAttempts} attempts.`);
    updateLog('Swap direction not found');
    return false;
}

function reInjectControlPanel() {
    if (!controlPanel || !document.body.contains(controlPanel)) {
        console.log(`${lh} - Control panel missing, re-injecting at initial position...`);
        document.body.appendChild(controlPanel);
        
        const currentLeft = parseInt(controlPanel.style.left) || parseInt(initialPanelPosition.left);
        const currentTop = parseInt(controlPanel.style.top) || parseInt(initialPanelPosition.top.replace('px', ''));
        controlPanel.style.left = `${currentLeft}px`;
        controlPanel.style.top = `${currentTop}px`;
        
        let isDragging = false;
        let currentX, currentY;
        controlPanel.onmousedown = (e) => {
            if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'SELECT' && !e.target.closest('button') && !e.target.closest('input') && !e.target.closest('select')) {
                isDragging = true;
                currentX = e.clientX - parseInt(controlPanel.style.left);
                currentY = e.clientY - parseInt(controlPanel.style.top);
                e.preventDefault();
            }
        };

        document.onmousemove = (e) => {
            if (isDragging) {
                controlPanel.style.left = `${e.clientX - currentX}px`;
                controlPanel.style.top = `${e.clientY - currentY}px`;
                const boxRect = controlPanel.getBoundingClientRect();
                if (boxRect.left < 0) controlPanel.style.left = '0px';
                if (boxRect.top < 0) controlPanel.style.top = '0px';
                if (boxRect.right > window.innerWidth) controlPanel.style.left = `${window.innerWidth - boxRect.width}px`;
                if (boxRect.bottom > window.innerHeight) controlPanel.style.top = `${window.innerHeight - boxRect.height}px`;
            }
        };

        document.onmouseup = () => {
            isDragging = false;
        };

        const microSwapsBtn = document.getElementById('microSwapsBtn');
        const rewardSwapsBtn = document.getElementById('rewardSwapsBtn');
        if (swapMode === 'Boost') {
            microSwapsBtn.style.background = '#28a745';
            rewardSwapsBtn.style.background = '#00CED1';
        } else if (swapMode === 'Reward') {
            rewardSwapsBtn.style.background = '#28a745';
            microSwapsBtn.style.background = '#00CED1';
        }

        updateLog('Panel re-injected');
    }
}

async function updateAmountInput() {
    const lh = '[Pond0x-AutoSwapper]';
    console.log(`${lh} - Attempting to update the "You Pay" amount input...`);

    const root = document.querySelector("#jupiter-plugin-instance > div")?.shadowRoot;
    if (!root) {
        console.error(`${lh} - ShadowRoot not found for Jupiter plugin`);
        return false;
    }

    // Look for the parent section that contains "You pay" or similar
    let amountInput = null;
    const payLabelNodes = [...root.querySelectorAll('*')]
        .filter(el => el.textContent?.trim().toLowerCase().includes('you pay'));

    for (const node of payLabelNodes) {
        const candidate = node.closest('div')?.querySelector('input[placeholder="0.00"]');
        if (candidate && candidate.offsetParent !== null) {
            amountInput = candidate;
            break;
        }
    }

    // Fallback: first visible input field
    if (!amountInput) {
        const candidates = [...root.querySelectorAll('input[placeholder="0.00"]')];
        amountInput = candidates.find(el => el.offsetParent !== null);
    }

    if (!amountInput) {
        console.error(`${lh} - ❌ Unable to find "You Pay" input`);
        return false;
    }

    console.log(`${lh} - ✅ Found "You Pay" input element:`, amountInput);

    // Focus, clear, and type
    amountInput.click();
    amountInput.focus();
    amountInput.value = '';
    amountInput.dispatchEvent(new Event('input', { bubbles: true }));

    const amountValue = String(await GM.getValue('pond0xSwapAmount', 0.01));
    for (const char of amountValue) {
        const keyEvt = { key: char, bubbles: true };
        amountInput.dispatchEvent(new KeyboardEvent('keydown', keyEvt));
        amountInput.value += char;
        amountInput.dispatchEvent(new Event('input', { bubbles: true }));
        amountInput.dispatchEvent(new KeyboardEvent('keyup', keyEvt));
        await new Promise(r => setTimeout(r, 35));
    }

    console.log(`${lh} - 💰 Entered amount ${amountValue} successfully`);
    return true;
}


async function setupTokensAndAmount() {
    if (isSettingUp) {
        console.log(`${lh} - Setup already in progress, skipping...`);
        return false;
    }
    isSettingUp = true;

    try {
        console.log(`${lh} - Setting up tokens: Sell=${selectedSellToken}, Buy=${selectedBuyToken} at ${new Date().toISOString()}...`);
        // Wait for dropdowns to ensure they are fully loaded
        const dropdowns = await new Promise(resolve => {
            let attempts = 0;
            const maxAttempts = 15;
            const check = () => {
                const dropdowns = getTokenDropdowns(); // Use the new helper function
                if (dropdowns.length >= 2) {
                    console.log(`${lh} - Found ${dropdowns.length} dropdowns in shadow DOM after ${attempts * 1000}ms`);
                    resolve(dropdowns);
                } else if (attempts >= maxAttempts) {
                    console.error(`${lh} - Dropdowns not found in shadow DOM after ${maxAttempts * 1000}ms`);
                    resolve([]);
                } else {
                    attempts++;
                    setTimeout(check, 1000);
                }
            };
            check();
        });

        if (dropdowns.length < 2) {
            console.error(`${lh} - Less than two dropdowns found for token selection.`);
            notifyUser('Pond0x Warning', 'Token selection dropdowns not found.');
            updateLog('Dropdowns missing');
            isSettingUp = false;
            return false;
        }

        const sellToken = TOKEN_CONFIG[selectedSellToken.toUpperCase()];
        const buyToken = TOKEN_CONFIG[selectedBuyToken.toUpperCase()];
        if (!sellToken || !buyToken || !sellToken.address || !buyToken.address) {
            console.error(`${lh} - Invalid token configuration: Sell=${selectedSellToken}, Buy=${selectedBuyToken}`);
            notifyUser('Pond0x Error', 'Invalid token configuration.');
            updateLog('Invalid tokens');
            isSettingUp = false;
            return false;
        }

        const selectTokenOption = async (tokenName, isSellToken) => {
            const tokenKey = tokenName.toUpperCase();
            const tokenConfig = TOKEN_CONFIG[tokenKey];
            const dropdown = isSellToken ? dropdowns[0] : dropdowns[1];
            console.log(`${lh} - Clicking ${isSellToken ? 'sell' : 'buy'} dropdown for ${tokenName}...`);
            dropdown.click();
            await new Promise(resolve => setTimeout(resolve, 1000)); // Increased delay

// ===== Wait for search bar in shadow DOM =====
let searchBar;
for (let i = 0; i < 20; i++) { // wait up to ~4 seconds (20 × 200ms)
    searchBar = getSearchInput();
    if (searchBar && searchBar.offsetWidth > 0 && searchBar.offsetHeight > 0) break;
    await new Promise(r => setTimeout(r, 200));
}

if (!searchBar) {
    console.error(`${lh} - Search bar not found after waiting for ${tokenConfig.symbol}.`);
    notifyUser('Pond0x Warning', `Search bar not found for ${tokenConfig.symbol}.`);
    updateLog('Search bar missing');
    return false;
}

console.log(`${lh} - Search bar detected, proceeding to type ${tokenConfig.address}`);
await typeIntoSearch(searchBar, tokenConfig.address);
await new Promise(resolve => setTimeout(resolve, 1500));

// ===== SELECT FIRST SEARCH RESULT (TARGETING LI.rounded.cursor-pointer) =====
console.log(`${lh} - Attempting to select first token search result...`);

let resultItem = null;
let resultScanCount = 0;

while (!resultItem && resultScanCount < 25) {
    const root = document.querySelector("#jupiter-plugin-instance > div").shadowRoot;
    if (root) {
        resultItem = root.querySelector(
            "li.rounded.cursor-pointer.px-5.my-1.list-none.flex.w-full.items-center"
        );
        if (resultItem && resultItem.offsetWidth > 0 && resultItem.offsetHeight > 0) break;
    }
    await new Promise(r => setTimeout(r, 200));
    resultScanCount++;
}

if (!resultItem) {
    console.error(`${lh} - No token search results found for ${tokenConfig.symbol}.`);
    notifyUser('Pond0x Warning', `No token results found for ${tokenConfig.symbol}.`);
    updateLog('Token search result missing');
    return false;
}

// ===== CLICK THE RESULT ITEM =====
console.log(`${lh} - Selecting token search result element...`, resultItem);

try {
    resultItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const rect = resultItem.getBoundingClientRect();
    const evtOpts = {
        bubbles: true,
        cancelable: true,
        composed: true,
        clientX: rect.left + rect.width / 2,
        clientY: rect.top + rect.height / 2,
        pointerType: "mouse",
        isPrimary: true,
        view: window
    };

    // Dispatch pointer events instead of just MouseEvents
    resultItem.dispatchEvent(new PointerEvent("pointerover", evtOpts));
    resultItem.dispatchEvent(new PointerEvent("pointerdown", evtOpts));
    resultItem.dispatchEvent(new PointerEvent("pointerup", evtOpts));

    // Fallback MouseEvents for frameworks that still listen for them
    resultItem.dispatchEvent(new MouseEvent("mouseover", evtOpts));
    resultItem.dispatchEvent(new MouseEvent("mousedown", evtOpts));
    resultItem.dispatchEvent(new MouseEvent("mouseup", evtOpts));
    resultItem.dispatchEvent(new MouseEvent("click", evtOpts));

    console.log(`${lh} - ✅ Pointer+Mouse click simulation complete for ${tokenConfig.symbol}.`);
} catch (err) {
    console.error(`${lh} - Error clicking token result:`, err);
}

await new Promise(resolve => setTimeout(resolve, 1000));
if (isSellToken) {
    console.log(`${lh} - ✅ Sell token selected successfully, moving on to Buy token setup.`);
    return true;
}
if (!isSellToken) {
    console.log(`${lh} - ✅ Buy token selected successfully, moving on to amount setup.`);
    return true;
}
// === Find the "You Pay" amount input ===
const root = document.querySelector("#jupiter-plugin-instance > div").shadowRoot;

let amountInput = null;

// Look for a label or container that includes "You Pay"
const paySections = [...root.querySelectorAll("*")].filter(
    el => el.textContent?.trim().toLowerCase().includes("you pay")
);

// Find the first visible input inside that section
for (const section of paySections) {
    const input = section.querySelector('input[placeholder="0.00"]');
    if (input && input.offsetParent !== null) {
        amountInput = input;
        break;
    }
}

// If we still didn't find it, fallback to first visible "0.00" input
if (!amountInput) {
    amountInput = [...root.querySelectorAll('input[placeholder="0.00"]')]
        .find(el => el.offsetParent !== null);
}

if (!amountInput) {
    console.error(`${lh} - ❌ Failed to locate "You Pay" amount input.`);
    return false;
}

console.log(`${lh} - ✅ Found "You Pay" input:`, amountInput);

// Focus and type amount
amountInput.click();
amountInput.focus();
amountInput.value = "";
amountInput.dispatchEvent(new Event("input", { bubbles: true }));

const amount = "1"; // set your desired input amount
for (const char of amount) {
    const eventProps = { key: char, bubbles: true };
    amountInput.dispatchEvent(new KeyboardEvent("keydown", eventProps));
    amountInput.value += char;
    amountInput.dispatchEvent(new Event("input", { bubbles: true }));
    amountInput.dispatchEvent(new KeyboardEvent("keyup", eventProps));
    await new Promise(r => setTimeout(r, 40));
}

console.log(`${lh} - 💰 Entered amount: ${amount}`);

            let attempts = 0;
            const maxAttempts = 10;
            const delay = 1000;

            while (attempts < maxAttempts) {
                let tokenOption = null;
                const selectors = [
                    tokenConfig.descriptionSelector,
                    'p.text-xs.text-left.text-gray-500.dark\\:text-white-35.truncate',
                    'p.text-sm.font-medium.text-white.truncate',
                    'p.text-xs.text-white', // Fallback
                    'span.text-sm.text-white' // Fallback
                ];

                for (const selector of selectors) {
                    const pElements = document.querySelectorAll(selector);
                    for (let p of pElements) {
                        const text = p.textContent.trim().toLowerCase();
                        const expectedText = (tokenConfig.descriptionText || tokenConfig.name).toLowerCase();
                        if (text === expectedText || text.includes(tokenConfig.name.toLowerCase()) || (tokenName === 'SOL' && text.includes('wrapped sol'))) {
                            tokenOption = p.closest('button') || p.closest('div') || p.closest('li');
                            console.log(`${lh} - Found ${tokenName} option with text: "${text}", selector: ${selector}`);
                            break;
                        }
                    }
                    if (tokenOption) break;
                }

                if (!tokenOption) {
                    const imgOption = document.querySelector(`img[alt*="${tokenName}"], img[alt*="${tokenConfig.descriptionText}"], img[alt*="Wrapped SOL"]`)?.closest('button') ||
                                     document.querySelector(`img[alt*="${tokenName}"], img[alt*="${tokenConfig.descriptionText}"], img[alt*="Wrapped SOL"]`)?.closest('div') ||
                                     document.querySelector(`img[alt*="${tokenName}"], img[alt*="${tokenConfig.descriptionText}"], img[alt*="Wrapped SOL"]`)?.closest('li');
                    if (imgOption) {
                        tokenOption = imgOption;
                        console.log(`${lh} - Found ${tokenName} via img alt attribute.`);
                    }
                }

                if (tokenOption) {
                    try {
                        tokenOption.click();
                    } catch (e) {
                        console.warn(`${lh} - Standard click failed for ${tokenName}, dispatching MouseEvent...`);
                        const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true, view: window });
                        tokenOption.dispatchEvent(clickEvent);
                    }
                    await new Promise(resolve => setTimeout(resolve, 1000)); // Increased delay

                    const verifySelection = () => {
                        return new Promise(resolve => {
                            let verifyAttempts = 0;
                            const maxVerifyAttempts = 10;
                            const check = () => {
                                const dropdownButton = isSellToken ? dropdowns[0] : dropdowns[1];
                                const textContent = dropdownButton.textContent.trim().toLowerCase();
                                const dropdownHTML = dropdownButton.outerHTML;
                                console.log(`${lh} - Verifying ${tokenName}: Text="${textContent}", HTML=${dropdownHTML.slice(0, 100)}`);
                                const isVisuallySelected = textContent.includes(tokenName.toLowerCase()) ||
                                    (tokenConfig.descriptionText && textContent.includes(tokenConfig.descriptionText.toLowerCase())) ||
                                    textContent.includes(tokenConfig.name.toLowerCase()) ||
                                    dropdownHTML.includes(tokenConfig.address) ||
                                    (tokenName === 'SOL' && textContent.includes('wrapped sol'));
                                const isPlaceholderAbsent = !textContent.includes('select token');
                                const isSelected = isVisuallySelected && isPlaceholderAbsent;
                                if (isSelected || verifyAttempts >= maxVerifyAttempts) {
                                    console.log(`${lh} - Verification for ${tokenName}: ${isSelected ? 'Success' : 'Failed (max attempts reached)'}`);
                                    resolve(isSelected);
                                } else {
                                    verifyAttempts++;
                                    setTimeout(check, 500);
                                }
                            };
                            setTimeout(check, 500);
                        });
                    };

                    const isSelected = await verifySelection();
                    if (isSelected) {
                        console.log(`${lh} - Successfully confirmed ${tokenName} selection.`);
                        updateLog(`${tokenName} selected`);
                        return true;
                    }
                    console.warn(`${lh} - ${tokenName} not confirmed, retrying...`);
                } else {
                    console.warn(`${lh} - ${tokenName} option not found (attempt ${attempts + 1}/${maxAttempts}).`);
                }
                attempts++;
                await new Promise(resolve => setTimeout(resolve, delay));
                if (attempts < maxAttempts) {
                    dropdown.click();
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    const newSearchBar = getSearchInput();
                    if (newSearchBar) {
                        newSearchBar.value = tokenConfig.address;
                        newSearchBar.dispatchEvent(new Event('input', { bubbles: true }));
                        newSearchBar.dispatchEvent(new Event('change', { bubbles: true }));
                        await new Promise(resolve => setTimeout(resolve, 1500));
                    }
                }
            }
            console.error(`${lh} - Failed to select ${tokenName} after ${maxAttempts} attempts.`);
            notifyUser('Pond0x Warning', `Failed to select ${tokenName}.`);
            updateLog(`Failed: ${tokenName}`);
            return false;
        };

        console.log(`${lh} - Setting up Sell token ${sellToken.name}...`);
        if (!(await selectTokenOption(sellToken.name, true))) {
            console.error(`${lh} - Failed to set up Sell token ${sellToken.name}.`);
            isSettingUp = false;
            return false;
        }
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log(`${lh} - Setting up Buy token ${buyToken.name}...`);
        if (!(await selectTokenOption(buyToken.name, false))) {
            console.error(`${lh} - Failed to set up Buy token ${buyToken.name}.`);
            isSettingUp = false;
            return false;
        }

        // Final confirmation for Buy token
        const buyDropdown = dropdowns[1];
        const textContent = buyDropdown.textContent.trim().toLowerCase();
        const dropdownHTML = buyDropdown.outerHTML;
        console.log(`${lh} - Final Buy token confirmation: Text="${textContent}", HTML=${dropdownHTML.slice(0, 100)}`);
        const isBuySelected = textContent.includes(buyToken.name.toLowerCase()) ||
            (buyToken.descriptionText && textContent.includes(buyToken.descriptionText.toLowerCase())) ||
            dropdownHTML.includes(buyToken.address) ||
            (buyToken.name === 'SOL' && textContent.includes('wrapped sol'));
        if (!isBuySelected) {
            console.error(`${lh} - ${buyToken.name} not confirmed as selected after setup.`);
            notifyUser('Pond0x Warning', `${buyToken.name} not confirmed as selected.`);
            updateLog(`${buyToken.name} not confirmed`);
            isSettingUp = false;
            return false;
        }

        isSettingUp = false;
        console.log(`${lh} - Token setup completed successfully.`);
        updateLog('Tokens set');
        return true;
    } catch (error) {
        console.error(`${lh} - Error in setupTokensAndAmount:`, error);
        notifyUser('Pond0x Error', `Token setup error: ${error.message}`);
        updateLog(`Error: ${error.message}`);
        isSettingUp = false;
        return false;
    }
}

function waitForPageReady() {
    return new Promise((resolve) => {
        const maxWaitTime = 5000;
        const startTime = Date.now();

        const checkReady = () => {
            swapButton = getSwapButton();
            const connectWalletButton = document.querySelector('div.p-5.text-md.font-semibold.h-full.w-full.leading-none');
            const isSwapVisible = swapButton && swapButton.offsetWidth > 0 && swapButton.offsetHeight > 0;
            const isConnectVisible = connectWalletButton && connectWalletButton.textContent.includes('Connect Wallet');

            if (document.readyState === 'complete' && (isSwapVisible || isConnectVisible)) {
                console.log(`${lh} - Initial page readiness check passed after ${Date.now() - startTime}ms.`);

                if (isConnectVisible && !isSwapVisible) {
                    console.log(`${lh} - Connect Wallet button detected. Initiating wallet connection...`);
                    connectWalletButton.click();
                    updateLog('Connecting wallet');
                    setTimeout(() => {
                        const phantomButton = document.querySelector('button.css-11b5aec span.css-1wq1rs1');
                        if (phantomButton && phantomButton.textContent.includes('Phantom')) {
                            console.log(`${lh} - Phantom wallet option found. Clicking...`);
                            phantomButton.closest('button').click();
                            updateLog('Selected Phantom');
                            setTimeout(() => {
                                swapButton = getSwapButton();
                                if (swapButton && swapButton.offsetWidth > 0 && swapButton.offsetHeight > 0) {
                                    console.log(`${lh} - Swap button appeared after wallet connection.`);
                                    proceedWithSwapReady();
                                } else {
                                    console.warn(`${lh} - Swap button still not found after wallet connection. Proceeding anyway...`);
                                    proceedWithSwapReady();
                                }
                            }, 2000);
                        } else {
                            console.error(`${lh} - Phantom wallet option not found after clicking Connect Wallet.`);
                            notifyUser('Pond0x Error', 'Phantom wallet option not found.');
                            updateLog('Phantom not found');
                            resolve(false);
                        }
                    }, 1000);
                } else if (isSwapVisible) {
                    console.log(`${lh} - Swap button already present. Proceeding...`);
                    proceedWithSwapReady();
                }
            } else if (Date.now() - startTime > maxWaitTime) {
                console.error(`${lh} - Page readiness timeout after ${maxWaitTime}ms. Proceeding anyway...`);
                resolve(false);
            } else {
                console.log(`${lh} - Waiting for page to be ready... (elapsed: ${Date.now() - startTime}ms)`);
                setTimeout(checkReady, 500);
            }
        };

        const proceedWithSwapReady = () => {
            const checkReactReadiness = () => {
                return new Promise((resolveInner) => {
                    let attempts = 0;
                    const maxAttempts = 10;

                    const check = () => {
                       const dropdowns = document.querySelectorAll('form button.rounded-full.flex.items-center');
                        if (dropdowns.length >= 2 && !swapButton.disabled && !dropdowns[0].disabled) {
                            console.log(`${lh} - React components appear ready after ${attempts * 500}ms.`);
                            resolveInner();
                        } else if (attempts >= maxAttempts) {
                            console.warn(`${lh} - React readiness check timed out after ${maxAttempts * 500}ms.`);
                            resolveInner();
                        } else {
                            attempts++;
                            setTimeout(check, 500);
                        }
                    };
                    check();
                });
            };

            checkReactReadiness().then(() => {
                console.log(`${lh} - React components ready after ${Date.now() - startTime}ms.`);
                const observeDOMStability = () => {
                    return new Promise((resolveInner) => {
                        let lastMutationTime = Date.now();
                        const stabilityThreshold = 1000;
                        const maxObservationTime = 5000;

                        const observer = new MutationObserver(() => {
                            lastMutationTime = Date.now();
                        });

                        const target = document.querySelector('.text-xl.btntxt')?.parentElement || document.body;
                        observer.observe(target, {
                            childList: true,
                            subtree: true,
                            attributes: true
                        });

                        const checkStability = () => {
                            const timeSinceLastMutation = Date.now() - lastMutationTime;
                            const totalElapsed = Date.now() - startTime;

                            if (timeSinceLastMutation >= stabilityThreshold || totalElapsed >= maxObservationTime) {
                                observer.disconnect();
                                resolveInner();
                            } else {
                                setTimeout(checkStability, 500);
                            }
                        };

                        setTimeout(checkStability, 500);
                    });
                };

                observeDOMStability().then(() => {
                    console.log(`${lh} - DOM stabilized, page is fully interactive after ${Date.now() - startTime}ms.`);
                    resolve(true);
                }).catch(() => {
                    console.warn(`${lh} - DOM stability check timed out after ${Date.now() - startTime}ms. Proceeding anyway...`);
                    resolve(true);
                });
            }).catch(() => {
                console.warn(`${lh} - React readiness check failed after ${Date.now() - startTime}ms. Proceeding anyway...`);
                resolve(true);
            });
        };

        setTimeout(checkReady, 1000);
    });
}


function waitForSwapButton() {
    return new Promise((resolve) => {
        console.log(`${lh} - Waiting for swap button in shadow DOM...`);
        let attempts = 0;
        const maxAttempts = 15;

        const checkButton = () => {
            swapButton = getSwapButton(); // Use the new helper function
            const isVisible = swapButton && swapButton.offsetWidth > 0 && swapButton.offsetHeight > 0;
            if (swapButton && isVisible) {
                console.log(`${lh} - Swap button found in shadow DOM after ${attempts * 500}ms`);
                resolve(swapButton);
                return;
            }
            attempts++;
            if (attempts >= maxAttempts) {
                console.error(`${lh} - Swap button not found in shadow DOM after ${maxAttempts * 500}ms, resolving with null...`);
                resolve(null);
                return;
            }
            setTimeout(checkButton, 500);
        };
        checkButton();
    });
}


async function fetchManifestSwaps(walletAddress) {
    return new Promise((resolve) => {
        console.log(`${lh} - Opening hidden tab to fetch manifest swaps for ${walletAddress}`);
        chrome.runtime.sendMessage({ action: 'openTab', url: 'https://cary0x.github.io/docs/info/manifest' }, (tabId) => {
            if (!tabId) {
                console.error(`${lh} - Failed to open hidden tab`);
                resolve('Error');
                return;
            }

            chrome.runtime.sendMessage({
                action: 'injectManifestScript',
                tabId: tabId,
                walletAddress: walletAddress
            });

            chrome.runtime.onMessage.addListener(function listener(message) {
                if (message.action === 'scrapedSwaps' && message.tabId === tabId) {
                    console.log(`${lh} - Received scraped swaps: ${message.swaps} for tab ${tabId}`);
                    chrome.runtime.onMessage.removeListener(listener);
                    resolve(message.swaps);
                }
            });
        });
    });
}

window.addEventListener('error', (event) => {
    if (event.message.includes('Cannot read properties of undefined (reading \'syncProps\')')) {
        console.error(`${lh} - Detected application error (syncProps) at ${new Date().toISOString()}. Stack:`, event.error?.stack);
        updateLog('App error');
        if (!hasReloaded) {
            console.log(`${lh} - Reloading page to recover from application error...`);
            sessionStorage.setItem('pond0xSwapReloaded', 'true');
            window.location.reload();
        } else if (setupRetryCount < MAX_SETUP_RETRIES) {
            console.log(`${lh} - Page already reloaded, attempting to reinitialize setup (retry ${setupRetryCount + 1}/${MAX_SETUP_RETRIES})...`);
            setupRetryCount++;
            setTimeout(async () => {
                try {
                    const success = await setupTokensAndAmount();
                    if (success) {
                        console.log(`${lh} - Setup reinitialized successfully after error at ${new Date().toISOString()}.`);
                        sessionStorage.setItem('initialSetupDone', 'true');
                    } else {
                        console.error(`${lh} - Setup reinitialization failed at ${new Date().toISOString()}.`);
                        notifyUser('Pond0x Error', 'Failed to reinitialize setup after error.');
                        updateLog('Setup failed');
                    }
                } catch (error) {
                    console.error(`${lh} - Error during setup reinitialization at ${new Date().toISOString()}:`, error);
                    notifyUser('Pond0x Error', `Error reinitializing setup: ${error.message}`);
                    updateLog(`Error: ${error.message}`);
                }
            }, 3000);
        } else {
            console.error(`${lh} - Max setup retries reached at ${new Date().toISOString()}. Cannot proceed.`);
            notifyUser('Pond0x Error', 'Application error persists after reload and retries. Please try again later.');
            updateLog('Max retries');
        }
    }
});

if (hasReloaded) {
    console.log(`${lh} - Page has reloaded. Restoring state...`);
    updateLog('Reloaded');
    const microSwapInput = document.getElementById('microSwapInput');
    if (microSwapInput) {
        // Only restore to originalSwapInput, which should remain the user-set value
        microSwapInput.value = originalSwapInput;
        console.log(`${lh} - Restored control panel input to user-set value: ${originalSwapInput} ${selectedSellToken}`);
    }
}

console.log(`${lh} - Waiting for page to be ready before starting swap automation...`);
try {
    const pageReady = await waitForPageReady();
    if (!pageReady) {
        console.warn(`${lh} - Page readiness check failed. Attempting to proceed anyway...`);
        notifyUser('Pond0x Warning', 'Page took too long to load. Proceeding with swap setup, but functionality may be limited.');
        updateLog('Page not ready');
    }

    console.log(`${lh} - Page readiness check completed. Scheduling setup...`);
    setTimeout(async () => {
        try {
            console.log(`${lh} - Initializing control panel...`);
            await initializeControlPanel();
            console.log(`${lh} - Starting token setup...`);
            const setupSuccess = await setupTokensAndAmount();
            if (setupSuccess) {
                sessionStorage.setItem('initialSetupDone', 'true');
                const amountSet = await updateAmountInput();
                if (!amountSet) {
                    console.error(`${lh} - Failed to set swap amount after token setup during reload at ${new Date().toISOString()}.`);
                    notifyUser('Pond0x Warning', 'Failed to set swap amount after reload. Please check manually.');
                    updateLog('Amount failed');
                } else {
                    console.log(`${lh} - Successfully set swap amount to ${swapAmount} after reload at ${new Date().toISOString()}.`);
                    const microSwapInput = document.getElementById('microSwapInput');
                    if (microSwapInput) microSwapInput.value = originalSwapInput; // Ensure control panel shows user-set value
                }
                if (hasReloaded && isSwapping) {
                    console.log(`${lh} - Auto-resuming swapping after reload at ${new Date().toISOString()}...`);
                    isSwapRunning = true;
                    await GM.setValue('pond0xIsSwapRunning', true);
                    const swapToggleBtn = document.getElementById('swapToggleBtn');
                    if (swapToggleBtn) {
                        swapToggleBtn.textContent = 'Stop Swapping';
                        swapToggleBtn.style.background = '#FF0000';
                        swapToggleBtn.style.color = 'white';
                        swapToggleBtn.disabled = false;
                    }
                    await startSwapping();
                }
            } else if (setupRetryCount < MAX_SETUP_RETRIES) {
                setupRetryCount++;
                console.error(`${lh} - Initial setup failed at ${new Date().toISOString()}. Retrying (${setupRetryCount}/${MAX_SETUP_RETRIES}) in 5 seconds...`);
                notifyUser('Pond0x Warning', `Initial setup failed. Retrying (${setupRetryCount}/${MAX_SETUP_RETRIES})...`);
                updateLog(`Retry ${setupRetryCount}`);
                await new Promise(resolve => setTimeout(resolve, 5000));
                await initializeControlPanel();
                const retrySuccess = await setupTokensAndAmount();
                if (retrySuccess) {
                    sessionStorage.setItem('initialSetupDone', 'true');
                    const amountSet = await updateAmountInput();
                    if (!amountSet) {
                        console.error(`${lh} - Failed to set swap amount after token setup during retry at ${new Date().toISOString()}.`);
                        notifyUser('Pond0x Warning', 'Failed to set swap amount after retry. Please check manually.');
                        updateLog('Amount failed');
                    } else {
                        console.log(`${lh} - Successfully set swap amount to ${swapAmount} after retry at ${new Date().toISOString()}.`);
                        const microSwapInput = document.getElementById('microSwapInput');
                        if (microSwapInput) microSwapInput.value = originalSwapInput; // Ensure control panel shows user-set value
                    }
                    if (hasReloaded && isSwapping) {
                        console.log(`${lh} - Auto-resuming swapping after successful retry at ${new Date().toISOString()}...`);
                        isSwapRunning = true;
                        await GM.setValue('pond0xIsSwapRunning', true);
                        const swapToggleBtn = document.getElementById('swapToggleBtn');
                        if (swapToggleBtn) {
                            swapToggleBtn.textContent = 'Stop Swapping';
                            swapToggleBtn.style.background = '#FF0000';
                            swapToggleBtn.style.color = 'white';
                            swapToggleBtn.disabled = false;
                        }
                        await startSwapping();
                    }
                } else {
                    console.error(`${lh} - Initial setup failed after retry ${setupRetryCount} at ${new Date().toISOString()}.`);
                    notifyUser('Pond0x Error', `Initial setup failed after ${setupRetryCount} retries.`);
                    updateLog(`Failed after ${setupRetryCount}`);
                }
            } else {
                console.error(`${lh} - Max setup retries reached at ${new Date().toISOString()}. Aborting.`);
                notifyUser('Pond0x Error', 'Initial setup failed after maximum retries.');
                updateLog('Max retries');
            }
        } catch (error) {
            console.error(`${lh} - Error in setup at ${new Date().toISOString()}:`, error);
            notifyUser('Pond0x Error', `Error during setup: ${error.message}`);
            updateLog(`Error: ${error.message}`);
            isSettingUp = false;
        }
    }, 1000);
} catch (error) {
    console.error(`${lh} - Error in main execution flow at ${new Date().toISOString()}:`, error);
    notifyUser('Pond0x Error', `Error initializing swapper: ${error.message}`);
    updateLog(`Init error`);
}
})();
