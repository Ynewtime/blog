<script setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import Home from './Home.vue'
import Article from './Article.vue'
import NotFound from './NotFound.vue'

const route = useRoute()
const isIndex = computed(() => route.path.replace(/index.html$/, '') === '/')
const isNotFound = computed(() => route.component === NotFound)
</script>

<template>
  <div class="antialiased">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <nav class="flex justify-between items-center py-10 font-bold">
        <a class="text-xl" href="/" aria-label="便笺">
          <img
            class="inline-block mr-2 w-8 rounded-full border"
            alt="logo"
            src="/logo.png"
          />
          <span v-if="!isIndex" class="hidden md:inline">便笺</span>
        </a>
        <div class="text-sm text-gray-500 leading-5">
          <a
            class="hover:text-gray-700"
            href="https://github.com/Ynewtime"
            target="_blank"
            rel="noopener"
            >GitHub</a
          >
          <span class="mr-2 ml-2">·</span>
          <a class="hover:text-gray-700" href="/feed.rss"
            >RSS<span class="hidden sm:inline"> Feed</span></a
          >
        </div>
      </nav>
    </div>
    <main class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <Home v-if="isIndex" />
      <NotFound v-else-if="isNotFound" />
      <Article v-else />
    </main>
  </div>
</template>
