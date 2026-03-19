import React from 'react';

/**
 * Base entity class ensuring all domain objects have unique identifiers.
 */
export abstract class Entity {
  readonly id: string;
  constructor() {
    this.id = crypto.randomUUID();
  }
}

export class Service extends Entity {
  constructor(
    public title: string,
    public description: string,
    public icon: React.ReactNode,
    public tags: string[]
  ) {
    super();
  }
}

export class Project extends Entity {
  constructor(
    public name: string,
    public clientIndustry: string,
    public summary: string,
    public outcome: string,
    public techStack: string[],
    public imageUrl: string
  ) {
    super();
  }
}

export class Testimonial extends Entity {
  constructor(
    public author: string,
    public role: string,
    public company: string,
    public content: string
  ) {
    super();
  }
}