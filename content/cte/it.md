---
title: Information Technology
logo: it.svg
description: Our three-year Information Technology program focuses on preparing students for IT certifications to enhance their resumes.
buttonText: Explore IT
front: true
partners:
    - name: "Test"
      logo: ""
sequence:
    - title: "9th Grade (Freshman year)"
      description: "Test"
    - title: "10th grade (Sophomore year)"
      description: "1"
    - title: "11th grade (Junior year)"
      description: "2"
    - title: "12th grade (Senior year)"
      description: "3"
--- 

<div class="px-6 container mx-auto my-12">
        <p> {{ .Params.description }}</p>

        {{ range .Params.partners }}
        <img src="{{ .logo }}" alt="{{ .name}}">
        {{ end }}

        {{ range .Params.sequence }}
        <details class="rounded-cell shadow-lg my-12">
            <summary>{{ .title }} </summary>
            <p> {{ .description }}</p>
        </details>
        {{ end }}
    </div>